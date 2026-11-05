CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ts INTEGER NOT NULL,          -- milliseconds since 1970-01-01 UTC
  ip TEXT,
  country TEXT,
  region TEXT,
  city TEXT,
  asn INTEGER,
  org TEXT,                     -- network operator, e.g. an ISP or a company
  path TEXT,
  lang TEXT,
  referrer TEXT,
  ua TEXT
);

CREATE INDEX IF NOT EXISTS visits_ts ON visits (ts);
CREATE INDEX IF NOT EXISTS visits_path_ts ON visits (path, ts);
