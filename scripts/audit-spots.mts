import { CITY_GUIDES } from "../src/lib/attractions/index";
import { getSpotMeta } from "../src/lib/attractions/meta";

const missing: string[] = [];
for (const guide of CITY_GUIDES) {
  for (const spot of guide.attractions) {
    if (!getSpotMeta(guide.city, spot.id)) {
      missing.push(`${guide.city}/${spot.id}`);
    }
  }
}

if (missing.length) {
  console.error("MISSING_META", missing.join(", "));
  process.exitCode = 1;
} else {
  console.log("SPOT_META_OK", CITY_GUIDES.length, "cities");
}
