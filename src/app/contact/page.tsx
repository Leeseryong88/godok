import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Amap Search support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <LegalPage kind="contact" />;
}
