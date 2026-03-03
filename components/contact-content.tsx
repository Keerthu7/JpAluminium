"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
// Added Mail icon
import { Phone, MapPin, Clock, Send, MessageCircle, Mail } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-foreground pb-24 pt-40">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          Contact Us
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-background sm:text-5xl">
          {"Let's Discuss Your Project"}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-background/70">
          Reach out for a free consultation and estimate. Our team is ready to
          help you with your aluminium and glass needs.
        </p>
      </div>
    </section>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation();

  const contactItems = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Sundakkampalayam, Avinashi, Tirupur-641654."],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+91 95857 40777"],
      href: "tel:+919585740777",
    },
    // Added Email Card
    {
      icon: Mail,
      title: "Email Us",
      lines: ["jpaluminiumwindows@gmail.com"],
      href: "mailto:jpaluminiumwindows@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["Chat with us instantly"],
      href: "https://wa.me/919585740777",
    },
  ];

  return (
    <section ref={ref} className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">
                {item.title}
              </h3>
              <div className="mt-2 flex flex-col gap-1">
                {item.lines.map((line) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      className="truncate text-sm text-muted-foreground transition-colors hover:text-primary"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div
            className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Send a Message
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Request a Free Estimate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Fill out the form below and our team will get back to you within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select a service</option>
                  <option value="sliding">Sliding Windows</option>
                  <option value="casement">Casement Windows</option>
                  <option value="doors">Aluminium Doors</option>
                  <option value="partitions">Glass Partitions</option>
                  <option value="balcony">Balcony Enclosures</option>
                  <option value="fabrication">Custom Fabrication</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-70"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map Section - Updated with working URL */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="sticky top-28 overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62624.04169601344!2d77.214646!3d11.187391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9067347a505b3%3A0xc629f9570994f31c!2sAvinashi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709470000000!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JP Aluminium Windows Location"
                className="w-full"
              />
              <div className="bg-card p-5">
                <h3 className="text-sm font-semibold text-card-foreground">
                  JP Aluminium Windows
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sundakkampalayam, Avinashi, Tirupur-641654.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactContent() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}