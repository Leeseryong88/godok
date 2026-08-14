"""Stitch Carto dark basemap tiles into city preview PNGs."""

from __future__ import annotations

import json
import math
import time
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
JOBS = Path(__file__).resolve().parent / "map-jobs.json"
OUT_DIR = ROOT / "public" / "maps"
TILE_SIZE = 256
USER_AGENT = "AmapSearch/1.0 (https://github.com/Leeseryong88/godok; city map preview)"
TILE_TMPL = "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"


def merc_x(lng: float, zoom: int) -> float:
    scale = TILE_SIZE * (2**zoom)
    return ((lng + 180.0) / 360.0) * scale


def merc_y(lat: float, zoom: int) -> float:
    scale = TILE_SIZE * (2**zoom)
    lat = max(min(lat, 85.051128), -85.051128)
    sin = math.sin(math.radians(lat))
    y = 0.5 - math.log((1 + sin) / (1 - sin)) / (4 * math.pi)
    return y * scale


def fetch_tile(z: int, x: int, y: int) -> Image.Image:
    n = 2**z
    x = x % n
    url = TILE_TMPL.format(z=z, x=x, y=y)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=30) as res:
        data = res.read()
    return Image.open(BytesIO(data)).convert("RGBA")


def render_job(job: dict) -> None:
    zoom = int(job["zoom"])
    width = int(job["width"])
    height = int(job["height"])
    cx = merc_x(job["centerLng"], zoom)
    cy = merc_y(job["centerLat"], zoom)
    left = cx - width / 2
    top = cy - height / 2

    x0 = math.floor(left / TILE_SIZE)
    y0 = math.floor(top / TILE_SIZE)
    x1 = math.floor((left + width) / TILE_SIZE)
    y1 = math.floor((top + height) / TILE_SIZE)

    canvas = Image.new("RGBA", (width, height), (226, 234, 228, 255))
    n = 2**zoom

    for ty in range(y0, y1 + 1):
        if ty < 0 or ty >= n:
            continue
        for tx in range(x0, x1 + 1):
            tile = fetch_tile(zoom, tx, ty)
            dx = int(tx * TILE_SIZE - left)
            dy = int(ty * TILE_SIZE - top)
            canvas.paste(tile, (dx, dy))
            time.sleep(0.08)

    out = OUT_DIR / f"{job['slug']}.png"
    canvas.convert("RGB").save(out, "PNG", optimize=True)
    print(f"saved {out.name} z{zoom} {width}x{height}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    jobs = json.loads(JOBS.read_text(encoding="utf-8"))
    for job in jobs:
        render_job(job)


if __name__ == "__main__":
    main()
