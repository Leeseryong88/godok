import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CITY_MAP_SLUG, getMapViewForCity } from "../src/lib/attractions/mapView";

const jobs = Object.keys(CITY_MAP_SLUG).map((cityZh) => {
  const view = getMapViewForCity(cityZh);
  if (!view) throw new Error(`No map view for ${cityZh}`);
  return { cityZh, ...view };
});

const out = join(dirname(fileURLToPath(import.meta.url)), "map-jobs.json");
writeFileSync(out, JSON.stringify(jobs, null, 2));
console.log("wrote", out, jobs.length);
