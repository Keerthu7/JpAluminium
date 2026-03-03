"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, Check } from "lucide-react";

const services = [
  {
    title: "Sliding Windows",
    description:
      "Our premium sliding aluminium windows offer smooth operation, excellent ventilation, and a sleek modern look. Built with high-quality aluminium profiles and tempered glass for security and durability.",
    image: "/images/service-sliding.jpg",
    benefits: [
      "Smooth gliding mechanism",
      "Space-saving design",
      "Excellent ventilation control",
      "Weather-resistant sealing",
      "Low maintenance finish",
    ],
  },
  {
    title: "Casement Windows",
    description:
      "Hinged casement windows that open outward for maximum airflow and natural light. Available in single and double configurations with multi-point locking systems for enhanced security.",
    image: "/images/service-casement.jpg",
    benefits: [
      "Maximum ventilation",
      "Multi-point locking system",
      "Easy to clean from inside",
      "Wide opening angle",
      "Excellent sound insulation",
    ],
  },
  {
    title: "Aluminium Doors",
    description:
      "Durable and stylish aluminium doors for main entrances, balconies, and interior spaces. Our doors combine strength with elegant design for both residential and commercial applications.",
    image: "/images/service-doors.jpg",
    benefits: [
      "Heavy-duty aluminium frames",
      "Corrosion-resistant finish",
      "Multiple design options",
      "Secure locking hardware",
      "Thermal insulation",
    ],
  },
  {
    title: "Glass Partitions",
    description:
      "Modern glass partitions with aluminium framing for offices, showrooms, and commercial spaces. Create elegant divided spaces while maintaining openness and natural light flow.",
    image: "/images/service-partition.jpg",
    benefits: [
      "Transparent workspace division",
      "Sound dampening properties",
      "Professional appearance",
      "Easy reconfiguration",
      "Toughened safety glass",
    ],
  },
  {
    title: "Balcony Enclosures",
    description:
      "Protect and enhance your balcony with our custom aluminium and glass enclosures. Enjoy outdoor views while staying protected from weather, dust, and noise.",
    image: "/images/service-balcony.jpg",
    benefits: [
      "Weather protection",
      "Dust and noise reduction",
      "Panoramic views preserved",
      "Safety compliance",
      "Custom-fit designs",
    ],
  },
  {
    title: "Custom Aluminium Fabrication",
    description:
      "Bespoke aluminium fabrication tailored to your unique requirements. From shower enclosures to decorative screens, our expert team crafts solutions that perfectly match your vision.",
    image: "/images/service-fabrication.jpg",
    benefits: [
      "Completely customized designs",
      "Precision manufacturing",
      "Wide range of finishes",
      "Expert consultation",
      "Quality assured delivery",
    ],
  },
];

function ServiceHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-foreground pb-24 pt-40">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          Our Services
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl">
          Comprehensive Aluminium & Glass Solutions
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-background/70">
          From residential windows to commercial glass partitions, we deliver
          end-to-end aluminium solutions tailored to your needs.
        </p>
      </div>
    </section>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
        >
          <div
            className={`${isReversed ? "lg:order-2" : ""} ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
          <div
            className={`${isReversed ? "lg:order-1" : ""} ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="tel:+917305341479"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesContent() {
  return (
    <>
      <ServiceHero />
      {services.map((service, i) => (
        <ServiceBlock key={service.title} service={service} index={i} />
      ))}
    </>
  );
}
