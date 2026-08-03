#!/usr/bin/env bash
# Serve the site locally at http://localhost:4000 with live rebuild on save.
#
# Uses a local Jekyll if one is installed, otherwise falls back to Docker.
# _config.dev.yml points site.url at localhost so assets and nav links resolve
# against the preview instead of the deployed site.
# No `set -u`: macOS ships bash 3.2, which errors on empty array expansion.
set -eo pipefail

cd "$(dirname "$0")"

PORT="${PORT:-4000}"
CONFIG="_config.yml,_config.dev.yml"

if command -v jekyll > /dev/null 2>&1; then
  echo "==> Using local Jekyll. Preview: http://localhost:$PORT"
  JEKYLL_ENV=production exec jekyll serve --port "$PORT" --config "$CONFIG"
fi

if ! docker info > /dev/null 2>&1; then
  echo "Neither Jekyll nor a running Docker daemon was found." >&2
  echo "Install Jekyll (https://jekyllrb.com/docs/installation/) or start Docker Desktop." >&2
  exit 1
fi

echo "==> Using Dockerized Jekyll. Preview: http://localhost:$PORT  (Ctrl-C to stop)"
# webrick is installed at startup because Ruby 3 dropped it from stdlib and the
# image does not ship it. Output goes to /tmp inside the container so that no
# root-owned _site/.jekyll-cache is left behind in the working tree.
TTY_FLAGS=()
[ -t 0 ] && TTY_FLAGS=(-it)

exec docker run --rm "${TTY_FLAGS[@]}" \
  -p "$PORT:$PORT" \
  -e JEKYLL_ENV=production \
  -v "$PWD":/srv/jekyll \
  -w /srv/jekyll \
  jekyll/jekyll:4.2.2 \
  sh -c "gem install webrick -N -q && jekyll serve --host 0.0.0.0 --port $PORT --config $CONFIG --disable-disk-cache -d /tmp/_site"
