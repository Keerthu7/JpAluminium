import type { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Us | JP Aluminium Windows",
  description:
    "Learn about JP Aluminium Windows - your trusted manufacturer and installer of high-quality aluminium windows, doors, and glass solutions in Avinashi and Tirupur.",
};

export default function AboutPage() {
  return <AboutContent />;
}
