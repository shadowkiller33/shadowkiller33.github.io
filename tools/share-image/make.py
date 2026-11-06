#!/usr/bin/env python3
"""Share images for blog posts: 1200 x 627 PNGs that show the post's title and nothing else.

Run it from the repository root:

    pip install pillow
    python tools/share-image/make.py           # make the images that are missing
    python tools/share-image/make.py --force   # remake all of them

Each image is written to assets/img/share/<slug>.png, where <slug> is the post's file
name without the date (2026-11-04-shape-not-return.md -> shape-not-return).
_includes/head.html uses that file as the post's og:image when it exists and falls
back to the avatar when it does not.
"""
import argparse
import re
from itertools import combinations
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, features

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
FONT = HERE / "Newsreader.ttf"
OUT = ROOT / "assets" / "img" / "share"
POST = re.compile(r"\d{4}-\d{2}-\d{2}-(.+)\.(?:md|markdown|html)$")

W, H = 1200, 627
MARGIN = 96
BACKGROUND = "#1c1c1b"  # charcoal, as in the homepage hero
TITLE = "#fcf9f3"
SUBTITLE = "#cdc8bd"
ACCENT = "#ee7b4f"  # coral
TITLE_SIZES = range(96, 59, -4)
SUBTITLE_SIZES = range(46, 33, -2)
TITLE_TRACKING = -0.02  # in em, a little tighter like the hero name
LAYOUT = ImageFont.Layout.RAQM if features.check("raqm") else ImageFont.Layout.BASIC


def front_matter_title(path):
    """The title: value of a post's front matter, plain or quoted."""
    match = re.match(r"---\s*\n(.*?)\n---", path.read_text(encoding="utf-8"), re.S)
    if not match:
        return None
    for line in match.group(1).splitlines():
        if line.startswith("title:"):
            value = line[len("title:"):].strip()
            if len(value) >= 2 and value[0] == value[-1] == '"':
                return value[1:-1].replace('\\"', '"').replace("\\\\", "\\")
            if len(value) >= 2 and value[0] == value[-1] == "'":
                return value[1:-1].replace("''", "'")
            return value
    return None


def line_width(text, font, tracking):
    return font.getlength(text) + tracking * max(len(text) - 1, 0)


def wrap(text, font, tracking, max_width):
    """The fewest lines that fit, with their lengths as even as possible."""
    words = text.split()
    widths = {}

    def width(a, b):
        if (a, b) not in widths:
            widths[a, b] = line_width(" ".join(words[a:b]), font, tracking)
        return widths[a, b]

    for count in range(1, len(words) + 1):
        best = None
        for cuts in combinations(range(1, len(words)), count - 1):
            bounds = list(zip((0,) + cuts, cuts + (len(words),)))
            widest = max(width(a, b) for a, b in bounds)
            if widest <= max_width and (best is None or widest < best[0]):
                best = (widest, [" ".join(words[a:b]) for a, b in bounds])
        if best:
            return best[1]
    return words


def fit(text, sizes, max_lines, tracking_em, max_width):
    """The largest size at which the text wraps into max_lines lines that fit."""
    for size in sizes:
        font = ImageFont.truetype(str(FONT), size, layout_engine=LAYOUT)
        tracking = tracking_em * size
        lines = wrap(text, font, tracking, max_width)
        if len(lines) <= max_lines and all(line_width(l, font, tracking) <= max_width for l in lines):
            break
    return font, size, tracking, lines


def draw_line(draw, x, baseline, text, font, fill, tracking):
    if not tracking:
        draw.text((x, baseline), text, font=font, fill=fill, anchor="ls")
        return
    # Put each character where the shaped text up to it ends, so kerning survives the tracking.
    for i, char in enumerate(text):
        left = x + font.getlength(text[: i + 1]) - font.getlength(char) + tracking * i
        draw.text((left, baseline), char, font=font, fill=fill, anchor="ls")


def cap_height(font):
    return -font.getbbox("H", anchor="ls")[1]


def render(title):
    main, _, sub = title.partition(": ")
    max_width = W - 2 * MARGIN
    t_font, t_size, t_track, t_lines = fit(main, TITLE_SIZES, 2 if sub else 3, TITLE_TRACKING, max_width)
    blocks = [(t_font, t_track, t_lines, round(t_size * 1.08), TITLE)]
    if sub:
        s_font, s_size, s_track, s_lines = fit(sub, SUBTITLE_SIZES, 2, 0, max_width)
        blocks.append((s_font, s_track, s_lines, round(s_size * 1.25), SUBTITLE))

    bar_h, bar_gap, block_gap = 6, 44, round(t_size * 0.5)
    # Height from the top of the accent bar to the last baseline.
    height = bar_h + bar_gap + cap_height(t_font) + (len(t_lines) - 1) * blocks[0][3]
    if sub:
        height += block_gap + cap_height(s_font) + (len(s_lines) - 1) * blocks[1][3]
    top = round((H - height) / 2) - 8  # a touch above centre reads as centred

    image = Image.new("RGB", (W, H), BACKGROUND)
    draw = ImageDraw.Draw(image)
    draw.rectangle([MARGIN, top, MARGIN + 64, top + bar_h - 1], fill=ACCENT)
    baseline = top + bar_h + bar_gap
    for n, (font, tracking, lines, leading, colour) in enumerate(blocks):
        baseline += cap_height(font) + (block_gap if n else 0)
        for i, line in enumerate(lines):
            draw_line(draw, MARGIN, baseline + i * leading, line, font, colour, tracking)
        baseline += (len(lines) - 1) * leading
    return image


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--force", action="store_true", help="remake images that already exist")
    args = parser.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    for path in sorted((ROOT / "_posts").iterdir()):
        match = POST.match(path.name)
        title = front_matter_title(path) if match else None
        if not title:
            continue
        target = OUT / f"{match.group(1)}.png"
        if target.exists() and not args.force:
            print(f"kept   {target.relative_to(ROOT)}")
            continue
        render(title).save(target, optimize=True)
        print(f"wrote  {target.relative_to(ROOT)}  ({title})")


if __name__ == "__main__":
    main()
