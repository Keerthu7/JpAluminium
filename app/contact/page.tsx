import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | JP Aluminium Windows",
  description:
    "Get in touch with JP Aluminium Windows for free estimates on aluminium windows, doors, glass partitions, and more. Located in Avinashi, Tirupur, Tamil Nadu.",
};

export default function ContactPage() {
  return <ContactContent />;
}
