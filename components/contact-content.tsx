"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Phone, MapPin, Send, MessageCircle, Mail } from "lucide-react";

/* ================= HERO ================= */

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

        <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl">
          Let's Discuss Your Project
        </h1>

        <p className="mt-6 text-lg text-background/70">
          Reach out for a free consultation and estimate.
        </p>
      </div>
    </section>
  );
}

/* ================= CONTACT INFO ================= */

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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary"
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

/* ================= CONTACT FORM ================= */

function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "919585740777";

    const whatsappMessage = `Hello JP Aluminium Windows,%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setService("");
      setMessage("");
    }, 3000);
  };

  return (
    <section ref={ref} className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* FORM SIDE */}
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>

            <h2 className="text-3xl font-bold text-foreground">
              Request a Free Estimate
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

              <input
                type="text"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm"
              />

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm"
              />

              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm"
              >
                <option value="">Select a service</option>
                <option value="Sliding Windows">Sliding Windows</option>
                <option value="Casement Windows">Casement Windows</option>
                <option value="Aluminium Doors">Aluminium Doors</option>
                <option value="Glass Partitions">Glass Partitions</option>
                <option value="Balcony Enclosures">Balcony Enclosures</option>
                <option value="Custom Fabrication">Custom Fabrication</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm"
              />

              <button
                type="submit"
                disabled={submitted}
                className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
              >
                {submitted ? "Opening WhatsApp..." : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

          {/* MAP SIDE */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="sticky top-28 overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62624.04169601344!2d77.214646!3d11.187391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9067347a505b3%3A0xc629f9570994f31c!2sAvinashi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                title="JP Aluminium Windows Location"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= MAIN EXPORT ================= */

export default function ContactContent() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  );
}