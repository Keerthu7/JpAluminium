"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight, Target, Eye, Award, Users } from "lucide-react";

function PageHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-foreground pb-24 pt-40">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          About Us
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl">
          Building Trust, One Window at a Time
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-background/70">
          JP Aluminium Windows is dedicated to delivering premium
          aluminium window and glass solutions with durability, modern design,
          and long-term performance.
        </p>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, isVisible } = useScrollAnimation();

  const blocks = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide strong, elegant, and affordable aluminium solutions for homes and commercial spaces. We strive to exceed expectations with every project through exceptional craftsmanship and customer service.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become the most trusted aluminium windows and interiors brand in Tirupur district and beyond. We aim to set industry standards in quality, innovation, and customer satisfaction.",
    },
    {
      icon: Award,
      title: "Quality Promise",
      description:
        "We use only premium-grade materials and employ rigorous quality control at every stage of manufacturing and installation, ensuring our products stand the test of time.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Our skilled technicians and designers bring years of experience in aluminium fabrication, ensuring precision, safety, and exceptional workmanship in every project we undertake.",
    },
  ];

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <div
              key={block.title}
              className={`rounded-xl border border-border bg-card p-8 transition-all hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <block.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`relative overflow-hidden rounded-xl ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <Image
              src="/images/about-team.jpg"
              alt="JP Aluminium team at work"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>
          <div
            className={`${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Experience & Expertise
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A Decade of Craftsmanship
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              With over 10 years of experience in the aluminium and glass
              industry, our skilled technicians deliver quality workmanship that
              stands out. We have completed hundreds of residential and
              commercial projects across Avinashi, Tirupur, and surrounding
              areas.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Projects" },
                { value: "10+", label: "Years" },
                { value: "100%", label: "Quality" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutContent() {
  return (
    <>
      <PageHero />
      <MissionVision />
      <ExperienceSection />
    </>
  );
}
