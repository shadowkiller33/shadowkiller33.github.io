// One-time setup for the visit logger. Run it from this folder:
//
//     node setup.mjs
//
// It installs wrangler, opens your browser so you can log in to Cloudflare, creates the
// database, deploys the Worker, writes its address into the site's _config.yml, and asks you
// to choose the password for the /log page. Running it again is safe.

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(here, "..", "..", "_config.yml");
const DB_NAME = "visit-log";
process.chdir(here);

function sh(command, { capture = false } = {}) {
  const r = spawnSync(command, {
    shell: true,
    stdio: capture ? ["inherit", "pipe", "inherit"] : "inherit",
    encoding: "utf8",
  });
  if (r.status !== 0) {
    console.error(`\nThis step failed: ${command}\nFix the problem shown above, then run "node setup.mjs" again.`);
    process.exit(r.status || 1);
  }
  return r.stdout || "";
}

function step(text) {
  console.log(`\n=== ${text}`);
}

function findDatabaseId() {
  const out = sh("npx wrangler d1 list --json", { capture: true });
  try {
    const list = JSON.parse(out.slice(out.indexOf("[")));
    const db = list.find((d) => d.name === DB_NAME);
    return db ? db.uuid || db.database_id || db.id || "" : "";
  } catch (e) {
    return "";
  }
}

if (Number(process.versions.node.split(".")[0]) < 18) {
  console.error("Node.js 18 or newer is needed. Install the LTS version from https://nodejs.org and try again.");
  process.exit(1);
}

step("1/6  Installing wrangler");
sh("npm install --no-audit --no-fund");

step("2/6  Logging in to Cloudflare (a browser window will open; approve it there)");
sh("npx wrangler login");

step("3/6  Creating the database");
let toml = fs.readFileSync("wrangler.toml", "utf8");
if (toml.includes("REPLACE_WITH_DATABASE_ID")) {
  let id = findDatabaseId();
  if (!id) {
    sh(`npx wrangler d1 create ${DB_NAME}`);
    id = findDatabaseId();
  }
  if (!id) {
    console.error(`\nCould not read the database id. Copy it from the output above into wrangler.toml, then run this again.`);
    process.exit(1);
  }
  toml = toml.replace("REPLACE_WITH_DATABASE_ID", id);
  fs.writeFileSync("wrangler.toml", toml);
  console.log(`Saved database_id ${id} in wrangler.toml.`);
} else {
  console.log("wrangler.toml already has a database_id.");
}

step("4/6  Creating the visits table");
sh(`npx wrangler d1 execute ${DB_NAME} --remote --file schema.sql`);

step("5/6  Deploying the Worker");
sh("npx wrangler deploy");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const lines = rl[Symbol.asyncIterator]();
let url = "";
for (;;) {
  process.stdout.write("\nPaste the https://....workers.dev address printed above, then press Enter: ");
  const { value, done } = await lines.next();
  if (done) {
    console.error("\nNo address entered. Run \"node setup.mjs\" again when you have it.");
    process.exit(1);
  }
  url = value.trim().replace(/\/+$/, "");
  if (/^https:\/\/[^\s/]+\.workers\.dev$/.test(url)) break;
  console.log("That does not look like a https://....workers.dev address.");
}
rl.close();
const config = fs.readFileSync(configPath, "utf8");
if (!/^visit_logger_url:.*$/m.test(config)) {
  console.error(`\nCould not find visit_logger_url in ${configPath}. Set it to ${url} by hand.`);
  process.exit(1);
}
fs.writeFileSync(configPath, config.replace(/^visit_logger_url:.*$/m, `visit_logger_url: "${url}"`));
console.log(`Saved visit_logger_url in _config.yml.`);

step("6/6  Choose the password for the log page");
sh("npx wrangler secret put VIEW_PASSWORD");

console.log(`
All set.
  1. Commit and push the site (wrangler.toml and _config.yml changed).
  2. After GitHub Pages rebuilds, visits to your posts are recorded.
  3. Read them at ${url}/log  (any user name, the password you just chose).`);
