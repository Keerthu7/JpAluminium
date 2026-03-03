"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern aluminium window installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Premium Aluminium Solutions
          </p>
        </div>
        <h1
          className="animate-fade-in-up text-balance text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.15s" }}
        >
          Premium Aluminium
          <br />
          <span className="text-primary">Windows & Glass</span> Solutions
        </h1>
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/80 sm:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          Strong. Stylish. Long-Lasting. Trusted by homes and businesses across
          Avinashi and Tirupur.
        </p>
        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="tel:+917305341479"
            className="flex items-center gap-2 rounded-lg border border-background/30 bg-background/10 px-8 py-4 text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/20"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-background/40 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-background/60" />
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Trusted Partner in Aluminium & Glass
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              JP Aluminium Windows is a trusted manufacturer and installer
              of high-quality aluminium windows, sliding doors, partitions, and
              glass works in Avinashi and Tirupur. With years of experience and
              dedication to craftsmanship, we deliver solutions that combine
              durability, modern design, and long-term performance.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className={`${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/about-preview.jpg"
                alt="JP Aluminium workshop and craftsmanship"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 px-6 py-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-background">
                  10+ Years of Excellence
                </p>
                <p className="text-xs text-background/70">
                  Serving Tamilnadu region
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      title: "Sliding Aluminium Windows",
      description:
        "Smooth-gliding windows with premium aluminium frames for modern living spaces.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="7" y1="3" x2="7" y2="21" strokeDasharray="2 2" />
          <line x1="17" y1="3" x2="17" y2="21" strokeDasharray="2 2" />
        </svg>
      ),
    },
    {
      title: "Openable Windows",
      description:
        "Casement and hinged windows with secure locking for maximum ventilation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <polyline points="12,3 21,12 12,21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      ),
    },
    {
      title: "Aluminium Doors",
      description:
        "Durable and stylish entry solutions with weather-resistant aluminium framing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <circle cx="15" cy="12" r="1.5" />
          <line x1="4" y1="12" x2="8" y2="12" />
        </svg>
      ),
    },
    {
      title: "Office Glass Partitions",
      description:
        "Elegant glass partitions with aluminium framing for modern workspaces.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
      ),
    },
    {
      title: "Toughened Glass Works",
      description:
        "High-strength toughened glass solutions for safety and premium aesthetics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <rect x="3" y="2" width="18" height="20" rx="2" />
          <path d="M8 6l4 4-4 4" />
          <line x1="12" y1="14" x2="16" y2="14" />
        </svg>
      ),
    },
    {
      title: "Custom Fabrication",
      description:
        "Bespoke aluminium solutions tailored to your specific design requirements.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            What We Offer
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            From sliding windows to custom fabrication, we provide comprehensive
            aluminium and glass solutions for homes and businesses.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    {
      title: "High-Quality Materials",
      description: "We use only premium-grade aluminium and glass for lasting results.",
    },
    {
      title: "Expert Installation",
      description: "Skilled technicians ensure precise, flawless installation every time.",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive pricing without compromising on quality or durability.",
    },
    {
      title: "On-Time Delivery",
      description: "We honor deadlines and deliver projects on schedule.",
    },
    {
      title: "Custom Designs",
      description: "Tailor-made solutions to match your vision and requirements.",
    },
  ];

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Why Us
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose JP Aluminium?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              We bring together quality materials, expert craftsmanship, and
              reliable service to deliver the best aluminium solutions in the
              region.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:shadow-md ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="h-5 w-5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  const images = [
    { src: "/images/gallery-1.jpg", alt: "Sliding aluminium windows" },
    { src: "/images/gallery-2.jpg", alt: "Office glass partitions" },
    { src: "/images/gallery-3.jpg", alt: "Casement windows" },
    { src: "/images/gallery-4.jpg", alt: "Aluminium doors" },
    { src: "/images/gallery-5.jpg", alt: "Balcony enclosures" },
    { src: "/images/gallery-6.jpg", alt: "Toughened glass works" },
  ];

  return (
    <section ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Project Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Browse through our recent projects showcasing quality aluminium and
            glass installations across the region.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/50">
                <p className="translate-y-full p-5 text-sm font-medium text-background transition-transform duration-300 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-foreground py-24"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary" />
      </div>
      <div
        className={`relative z-10 mx-auto max-w-3xl px-6 text-center ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl">
          Looking for Durable & Stylish Aluminium Windows?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-background/70">
          Get a free estimate for your project. Our experts will help you choose
          the perfect aluminium and glass solutions for your space.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
          >
            Request a Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="tel:+917305341479"
            className="flex items-center gap-2 rounded-lg border border-background/30 px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-background/10"
          >
            <Phone className="h-4 w-4" />
            Call Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
