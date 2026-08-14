import { CITY_GUIDES } from "../src/lib/attractions/index";
import { getSpotMeta } from "../src/lib/attractions/meta";
import {
  getMapViewForCity,
  mercatorX,
  mercatorY,
} from "../src/lib/attractions/mapView";

for (const guide of CITY_GUIDES) {
  const view = getMapViewForCity(guide.city);
  if (!view) {
    console.log("NO_VIEW", guide.city);
    continue;
  }
  const left = mercatorX(view.centerLng, view.zoom) - view.width / 2;
  const top = mercatorY(view.centerLat, view.zoom) - view.height / 2;
  const rows = [];
  for (const spot of guide.attractions) {
    const meta = getSpotMeta(guide.city, spot.id);
    if (!meta) {
      rows.push({ id: spot.id, issue: "NO_META" });
      continue;
    }
    const x = ((mercatorX(meta.lng, view.zoom) - left) / view.width) * 100;
    const y = ((mercatorY(meta.lat, view.zoom) - top) / view.height) * 100;
    const inView = x >= 4 && x <= 96 && y >= 8 && y <= 94;
    if (!inView) {
      rows.push({
        id: spot.id,
        issue: "OFF",
        x: Math.round(x),
        y: Math.round(y),
        z: view.zoom,
      });
    }
  }
  if (rows.length) {
    console.log(guide.city, "z" + view.zoom, rows.length + "/" + guide.attractions.length);
    for (const r of rows) console.log(" ", JSON.stringify(r));
  }
}
