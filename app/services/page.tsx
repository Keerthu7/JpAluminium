import type { Metadata } from "next";
import { ServicesContent } from "@/components/services-content";

export const metadata: Metadata = {
  title: "Services | JP Aluminium Windows",
  description:
    "Explore our comprehensive aluminium and glass solutions including sliding windows, casement windows, aluminium doors, glass partitions, balcony enclosures, and custom fabrication.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
