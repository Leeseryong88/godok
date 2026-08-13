import type { Metadata } from "next";
import { GuidesIndex } from "@/components/GuidesIndex";

export const metadata: Metadata = {
  title: "City travel guides",
  description:
    "Practical travel guides for major Chinese cities with Amap quick links.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return <GuidesIndex />;
}
