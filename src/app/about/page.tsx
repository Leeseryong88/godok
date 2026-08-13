import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "About",
  description: "About Amap Search, an unofficial helper for the Amap app.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <LegalPage kind="about" />;
}
