// Visit logger for the blog posts on shadowkiller33.github.io (a Cloudflare Worker).
//
//   POST /hit      called by each post page (navigator.sendBeacon); stores one visit
//   GET  /log      password-protected table of visits (the browser asks for a password;
//                  any user name works)
//   GET  /log.csv  the same rows as a CSV download
//   cron           deletes visits older than RETENTION_DAYS
//
// Stored per visit: time, IP address, approximate location and network (from Cloudflare),
// page path, page language, referrer and browser user agent.

const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|embedly|monitor/i;
const DAY = 86400000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/hit") return hit(request, env);
    if (url.pathname === "/log" || url.pathname === "/log.csv") {
      if (!authorized(request, env)) {
        return new Response("Password required", {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="visit log", charset="UTF-8"' },
        });
      }
      return url.pathname === "/log.csv" ? csv(url, env) : page(url, env);
    }
    return new Response("Not found", { status: 404 });
  },

  async scheduled(event, env) {
    await env.DB.prepare("DELETE FROM visits WHERE ts < ?").bind(Date.now() - retention(env) * DAY).run();
  },
};

function retention(env) {
  return Math.max(1, parseInt(env.RETENTION_DAYS || "90", 10) || 90);
}

async function hit(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const cors = { "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0] || "*" };
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { ...cors, "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" },
    });
  }
  // Only page views sent from the site itself are recorded; everything else is ignored quietly.
  if (request.method !== "POST" || !allowed.includes(origin)) return new Response(null, { status: 204, headers: cors });
  const ua = request.headers.get("User-Agent") || "";
  if (BOT.test(ua)) return new Response(null, { status: 204, headers: cors });

  let data = {};
  try {
    data = JSON.parse((await request.text()).slice(0, 4000)) || {};
  } catch (e) {
    data = {};
  }
  const cf = request.cf || {};
  const clip = (value, n) => String(value ?? "").slice(0, n);
  await env.DB.prepare(
    "INSERT INTO visits (ts, ip, country, region, city, asn, org, path, lang, referrer, ua) " +
      "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  )
    .bind(
      Date.now(),
      clip(request.headers.get("CF-Connecting-IP"), 64),
      clip(cf.country, 8),
      clip(cf.region, 80),
      clip(cf.city, 80),
      Number.isFinite(cf.asn) ? cf.asn : null,
      clip(cf.asOrganization, 120),
      clip(data.path, 300),
      clip(data.lang, 8),
      clip(data.referrer, 500),
      clip(ua, 400)
    )
    .run();
  return new Response(null, { status: 204, headers: cors });
}

function authorized(request, env) {
  const header = request.headers.get("Authorization") || "";
  if (!env.VIEW_PASSWORD || !header.startsWith("Basic ")) return false;
  let decoded = "";
  try {
    decoded = new TextDecoder().decode(Uint8Array.from(atob(header.slice(6)), (c) => c.charCodeAt(0)));
  } catch (e) {
    return false;
  }
  const given = decoded.slice(decoded.indexOf(":") + 1);
  const expected = env.VIEW_PASSWORD;
  let diff = given.length ^ expected.length;
  for (let i = 0; i < Math.max(given.length, expected.length); i++) {
    diff |= (given.charCodeAt(i) || 0) ^ (expected.charCodeAt(i) || 0);
  }
  return diff === 0;
}

async function rows(url, env) {
  const days = Math.min(Math.max(parseInt(url.searchParams.get("days") || "30", 10) || 30, 1), 3650);
  const path = url.searchParams.get("path") || "";
  const since = Date.now() - days * DAY;
  const statement = path
    ? env.DB.prepare("SELECT * FROM visits WHERE ts >= ? AND path = ? ORDER BY ts DESC LIMIT 5000").bind(since, path)
    : env.DB.prepare("SELECT * FROM visits WHERE ts >= ? ORDER BY ts DESC LIMIT 5000").bind(since);
  const { results } = await statement.all();
  return { days, path, results };
}

function formatter(env) {
  const tz = env.TIME_ZONE || "UTC";
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  });
  return { tz, when: (ts) => fmt.format(new Date(ts)).replace(",", "") };
}

async function csv(url, env) {
  const { results } = await rows(url, env);
  const { when } = formatter(env);
  const quote = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = [["time", "ip", "country", "region", "city", "asn", "network", "page", "lang", "referrer", "browser"].join(",")];
  for (const r of results) {
    lines.push([when(r.ts), r.ip, r.country, r.region, r.city, r.asn, r.org, r.path, r.lang, r.referrer, r.ua].map(quote).join(","));
  }
  return new Response("﻿" + lines.join("\n"), {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="visits.csv"' },
  });
}

const plural = (n, one, many = one + "s") => `${n} ${n === 1 ? one : many}`;

const esc = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function page(url, env) {
  const { days, path, results } = await rows(url, env);
  const { tz, when } = formatter(env);
  const link = (params) => {
    const q = new URLSearchParams({ days: String(days), ...(path ? { path } : {}), ...params });
    for (const [k, v] of [...q]) if (v === "") q.delete(k);
    return "/log?" + q.toString();
  };
  const ips = new Set(results.map((r) => r.ip).filter(Boolean));
  const paths = [...new Set(results.map((r) => r.path).filter(Boolean))];
  const body = results
    .map(
      (r) => `<tr>
<td class="m">${esc(when(r.ts))}</td>
<td class="m">${esc(r.ip)}</td>
<td>${esc([r.city, r.region, r.country].filter(Boolean).join(", "))}</td>
<td>${esc(r.org)}${r.asn ? ` <span class="dim">AS${esc(r.asn)}</span>` : ""}</td>
<td><a href="${esc(link({ path: r.path }))}">${esc(r.path)}</a>${r.lang ? ` <span class="dim">${esc(r.lang)}</span>` : ""}</td>
<td class="wrap">${esc(r.referrer)}</td>
<td class="wrap dim">${esc(r.ua)}</td>
</tr>`
    )
    .join("");
  const dayLinks = [1, 7, 30, 90, 365]
    .map((d) => (d === days ? `<b>${d}d</b>` : `<a href="${esc(link({ days: String(d) }))}">${d}d</a>`))
    .join(" · ");
  const pathLinks = path
    ? `<a href="${esc(link({ path: "" }))}">All pages</a> · <b>${esc(path)}</b>`
    : paths.slice(0, 12).map((p) => `<a href="${esc(link({ path: p }))}">${esc(p)}</a>`).join(" · ");
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Visit log</title>
<style>
body{margin:0;padding:32px;background:#faf9f5;color:#1a1a19;font:14px/1.5 Inter,-apple-system,"Segoe UI",Arial,sans-serif}
h1{margin:0 0 4px;font:500 26px/1.2 Newsreader,Georgia,serif}
.sum{margin:0 0 16px;color:#46453f}.bar{margin:0 0 8px;font:12px/1.6 "IBM Plex Mono",ui-monospace,monospace;color:#75736c}
a{color:#2453e6;text-decoration:none}a:hover{text-decoration:underline}
.scroll{overflow-x:auto;border:1px solid #e3e0d6;border-radius:12px;background:#fff}
table{border-collapse:collapse;width:100%;min-width:1100px}
th,td{padding:8px 10px;border-bottom:1px solid #eeebe3;text-align:left;vertical-align:top}
th{position:sticky;top:0;background:#f2f0e9;font:500 11px/1.4 "IBM Plex Mono",ui-monospace,monospace;letter-spacing:.06em;text-transform:uppercase;color:#46453f}
.m{font-family:"IBM Plex Mono",ui-monospace,monospace;font-size:12px;white-space:nowrap}
.wrap{max-width:320px;word-break:break-all;font-size:12px}.dim{color:#75736c}
</style></head><body>
<h1>Visit log</h1>
<p class="sum">${plural(results.length, "visit")} from ${plural(ips.size, "IP address", "IP addresses")} in the last ${plural(days, "day")}${path ? ` on ${esc(path)}` : ""}. Times are ${esc(tz)}. Visits older than ${plural(retention(env), "day")} are deleted.</p>
<p class="bar">Period: ${dayLinks} · <a href="${esc(link({}).replace("/log?", "/log.csv?"))}">Download CSV</a></p>
<p class="bar">Pages: ${pathLinks || "none yet"}</p>
<div class="scroll"><table>
<thead><tr><th>Time</th><th>IP</th><th>Location</th><th>Network</th><th>Page</th><th>Referrer</th><th>Browser</th></tr></thead>
<tbody>${body || '<tr><td colspan="7" class="dim">No visits yet.</td></tr>'}</tbody>
</table></div>
</body></html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
