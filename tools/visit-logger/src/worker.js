// Visit logger for shadowkiller33.github.io (a Cloudflare Worker).
//
//   POST /hit       called by the homepage and each post (navigator.sendBeacon); stores one page view
//   GET  /card.png  a post's share image. The site's og:image points here, so when LinkedIn, Slack,
//                   X and the like fetch the image to build a link card, the fetch is stored as a
//                   link preview (lang "preview"), and the image is passed through from the site.
//   GET  /log       password-protected table of visits (the browser asks for a password;
//                   any user name works)
//   GET  /log.csv   the same rows as a CSV download
//   cron            deletes visits older than RETENTION_DAYS
//
// Stored per visit: time, IP address, approximate location and network (from Cloudflare),
// page path, page language (or "preview"), referrer and browser user agent.

const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|embedly|monitor/i;
const DAY = 86400000;
const PREVIEW = "preview";

// Who fetched a link preview, judged from the user agent. Order matters: iMessage sends a
// user agent that also names Facebook and Twitter.
const SOURCES = [
  [/facebookexternalhit\/1\.1 Facebot Twitterbot/i, "iMessage"],
  [/LinkedInBot/i, "LinkedIn"],
  [/Slackbot/i, "Slack"],
  [/WhatsApp/i, "WhatsApp"],
  [/MicroMessenger|WeChat/i, "WeChat"],
  [/Discordbot/i, "Discord"],
  [/TelegramBot/i, "Telegram"],
  [/Twitterbot/i, "X"],
  [/facebookexternalhit|Facebot/i, "Facebook"],
  [/redditbot/i, "Reddit"],
  [/SkypeUriPreview|Teams/i, "Microsoft Teams"],
  [/Mastodon/i, "Mastodon"],
  [/Applebot/i, "Apple"],
  [/Googlebot|Google-InspectionTool|GoogleOther/i, "Google"],
  [/bingbot/i, "Bing"],
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/hit") return hit(request, env);
    if (url.pathname === "/card.png") return card(request, env, ctx, url);
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

function allowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
}

function source(ua) {
  const match = SOURCES.find(([pattern]) => pattern.test(ua || ""));
  return match ? match[1] : "";
}

async function record(request, env, data) {
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
      clip(request.headers.get("User-Agent"), 400)
    )
    .run();
}

async function hit(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = allowedOrigins(env);
  const cors = { "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0] || "*" };
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { ...cors, "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type" },
    });
  }
  // Only page views sent from the site itself are recorded; everything else is ignored quietly.
  if (request.method !== "POST" || !allowed.includes(origin)) return new Response(null, { status: 204, headers: cors });
  if (BOT.test(request.headers.get("User-Agent") || "")) return new Response(null, { status: 204, headers: cors });

  let data = {};
  try {
    data = JSON.parse((await request.text()).slice(0, 4000)) || {};
  } catch (e) {
    data = {};
  }
  await record(request, env, { path: data.path, lang: data.lang === PREVIEW ? "" : data.lang, referrer: data.referrer });
  return new Response(null, { status: 204, headers: cors });
}

async function card(request, env, ctx, url) {
  const slug = url.searchParams.get("s") || "";
  const path = url.searchParams.get("p") || "";
  const site = allowedOrigins(env)[0];
  if (!site || !/^[a-z0-9][a-z0-9-]{0,99}$/.test(slug) || !["GET", "HEAD"].includes(request.method)) {
    return new Response("Not found", { status: 404 });
  }
  const image = await fetch(`${site}/assets/img/share/${slug}.png`, { cf: { cacheTtl: 600, cacheEverything: true } });
  if (!image.ok) return new Response("Not found", { status: 404 });
  if (request.method === "GET") {
    ctx.waitUntil(record(request, env, { path: /^\/[\w\-./]*$/.test(path) ? path : "", lang: PREVIEW, referrer: "" }));
  }
  return new Response(request.method === "HEAD" ? null : image.body, {
    headers: { "Content-Type": image.headers.get("Content-Type") || "image/png", "Cache-Control": "public, max-age=300" },
  });
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
  const kind = ["views", "previews"].includes(url.searchParams.get("kind")) ? url.searchParams.get("kind") : "";
  const where = ["ts >= ?"];
  const args = [Date.now() - days * DAY];
  if (path) {
    where.push("path = ?");
    args.push(path);
  }
  if (kind === "previews") where.push(`lang = '${PREVIEW}'`);
  if (kind === "views") where.push(`(lang IS NULL OR lang != '${PREVIEW}')`);
  const { results } = await env.DB.prepare(
    `SELECT * FROM visits WHERE ${where.join(" AND ")} ORDER BY ts DESC LIMIT 5000`
  )
    .bind(...args)
    .all();
  return { days, path, kind, results };
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
  const header = ["time", "ip", "country", "region", "city", "asn", "network", "page", "lang", "referrer", "browser", "preview source"];
  const lines = [header.join(",")];
  for (const r of results) {
    const fields = [when(r.ts), r.ip, r.country, r.region, r.city, r.asn, r.org, r.path, r.lang, r.referrer, r.ua,
      r.lang === PREVIEW ? source(r.ua) : ""];
    lines.push(fields.map(quote).join(","));
  }
  return new Response("﻿" + lines.join("\n"), {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": 'attachment; filename="visits.csv"' },
  });
}

const plural = (n, one, many = one + "s") => `${n} ${n === 1 ? one : many}`;

const esc = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

async function page(url, env) {
  const { days, path, kind, results } = await rows(url, env);
  const { tz, when } = formatter(env);
  const link = (params) => {
    const q = new URLSearchParams({ days: String(days), ...(path ? { path } : {}), ...(kind ? { kind } : {}), ...params });
    for (const [k, v] of [...q]) if (v === "") q.delete(k);
    return "/log?" + q.toString();
  };
  const views = results.filter((r) => r.lang !== PREVIEW);
  const previews = results.length - views.length;
  const ips = new Set(views.map((r) => r.ip).filter(Boolean));
  const paths = [...new Set(results.map((r) => r.path).filter(Boolean))];
  const label = (r) =>
    r.lang === PREVIEW
      ? ` <span class="tag">link preview${source(r.ua) ? ` · ${esc(source(r.ua))}` : ""}</span>`
      : r.lang
        ? ` <span class="dim">${esc(r.lang)}</span>`
        : "";
  const body = results
    .map(
      (r) => `<tr>
<td class="m">${esc(when(r.ts))}</td>
<td class="m">${esc(r.ip)}</td>
<td>${esc([r.city, r.region, r.country].filter(Boolean).join(", "))}</td>
<td>${esc(r.org)}${r.asn ? ` <span class="dim">AS${esc(r.asn)}</span>` : ""}</td>
<td><a href="${esc(link({ path: r.path }))}">${esc(r.path)}</a>${label(r)}</td>
<td class="wrap">${esc(r.referrer)}</td>
<td class="wrap dim">${esc(r.ua)}</td>
</tr>`
    )
    .join("");
  const choice = (current, value, text, param) =>
    current === value ? `<b>${text}</b>` : `<a href="${esc(link({ [param]: value }))}">${text}</a>`;
  const dayLinks = [1, 7, 30, 90, 365].map((d) => choice(days, d, `${d}d`, "days")).join(" · ");
  const kindLinks = [["", "All"], ["views", "Page views"], ["previews", "Link previews"]]
    .map(([value, text]) => choice(kind, value, text, "kind"))
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
.tag{display:inline-block;margin-left:4px;padding:0 6px;border-radius:999px;background:#fbe9e1;color:#9c4426;font-size:11px;white-space:nowrap}
</style></head><body>
<h1>Visit log</h1>
<p class="sum">${plural(views.length, "page view")} from ${plural(ips.size, "IP address", "IP addresses")} and ${plural(previews, "link preview")} in the last ${plural(days, "day")}${path ? ` on ${esc(path)}` : ""}. A link preview is a platform such as LinkedIn or Slack fetching a post’s card, usually because someone shared the link. Times are ${esc(tz)}. Visits older than ${plural(retention(env), "day")} are deleted.</p>
<p class="bar">Period: ${dayLinks} · <a href="${esc(link({}).replace("/log?", "/log.csv?"))}">Download CSV</a></p>
<p class="bar">Show: ${kindLinks}</p>
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
