import { CITY_ARTICLES } from "../src/lib/guides/index";
import { getCityGuide } from "../src/lib/attractions/index";
import { auditArticle, GUIDE_QUALITY } from "../src/lib/guides/quality";

const all = [];
for (const a of CITY_ARTICLES) {
  const ids = (getCityGuide(a.cityZh)?.attractions || []).map((s) => s.id);
  const issues = auditArticle(a, ids);
  if (!a.updatedAt) {
    issues.push({
      slug: a.slug,
      locale: "ko" as const,
      issues: ["missing updatedAt"],
    });
  }
  if (ids.length === 0) {
    issues.push({
      slug: a.slug,
      locale: "ko" as const,
      issues: [`no attractions for cityZh=${a.cityZh}`],
    });
  }
  all.push(...issues);
}

console.log("articles", CITY_ARTICLES.length);
console.log("thresholds", JSON.stringify(GUIDE_QUALITY));
if (!all.length) {
  console.log("AUDIT_OK");
} else {
  console.log("AUDIT_FAIL", all.length);
  for (const x of all) console.log(JSON.stringify(x));
  process.exitCode = 1;
}
