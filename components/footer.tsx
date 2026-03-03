import Link from "next/link";
import Image from "next/image";
// Added Mail to the imports
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="JP Aluminium Windows"
                width={44}
                height={44}
                className="h-11 brightness-0 invert"
                style={{ width: "auto" }}
              />
              <div>
                <p className="text-sm font-bold tracking-wide text-background">
                  JP Aluminium
                </p>
                <p className="text-xs tracking-wider text-background/70">
                  Windows
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-background/70">
              Trusted manufacturer and installer of high-quality aluminium
              windows, doors, partitions, and glass works in Avinashi and
              Tirupur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Sliding Windows",
                "Casement Windows",
                "Aluminium Doors",
                "Glass Partitions",
                "Balcony Enclosures",
                "Custom Fabrication",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  Sundakkampalayam, Avinashi, Tirupur-641654.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+919585740777"
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  +91 95857 40777
                </a>
              </li>
              {/* --- New Email Section --- */}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:jpaluminiumwindows@gmail.com"
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  jpaluminiumwindows@gmail.com
                </a>
              </li>
              {/* ------------------------- */}
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-background/70">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} JP Aluminium Windows. All
            rights reserved.
          </p>
          <p className="text-xs text-background/40">
            Developed by{" "}
            <a
              href="https://hynox.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-colors hover:text-primary/80"
            >
              HYNOX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}