import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Dither from "@/components/Dither";

const nav = [
  {
    label: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "#" },
    ],
  },
  {
    label: "Connect",
    links: [
      { name: "Contact Sales", href: "/contact" },
      { name: "Support", href: "/contact" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative text-foreground pt-20 pb-0 px-6 overflow-hidden">
      {/* Dither background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.145, 0.388, 0.922]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={1}
          colorNum={12}
          pixelSize={1}
          waveAmplitude={0.25}
          waveFrequency={2}
          waveSpeed={0.1}
        />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background via-background/40 to-transparent" />
      </div>

      <div className="md:max-w-[75%] mx-auto relative z-10">
        {/* Logo + tagline + CTA */}
        <div className="pb-16 border-b border-foreground/10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/logo.png"
                alt="Proxyon Technologies"
                width={220}
                height={60}
                className="h-12 w-auto dark:invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Powering Zimbabwe&apos;s digital revolution with innovative
              software solutions across Southern Africa.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-foreground"
          >
            <span className="text-2xl md:text-3xl font-bold leading-none">
              Get in touch
            </span>
            <span className="flex items-center justify-center h-10 w-10 rounded-full border border-foreground/20 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Nav grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 py-16 text-muted-foreground">
          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-foreground font-semibold mb-5 text-[10px] uppercase tracking-[0.2em]">
              Contact
            </h4>
            <div className="text-sm space-y-1.5 leading-relaxed">
              <p>Suite 2, Block C</p>
              <p>Highlands Offices</p>
              <p>Harare, Zimbabwe</p>
              <p className="pt-3">+263 77 123 4567</p>
              <p>info@proxyon.tech</p>
            </div>
          </div>

          {/* Dynamic nav columns */}
          {nav.map((col) => (
            <div key={col.label}>
              <h4 className="text-foreground font-semibold mb-5 text-[10px] uppercase tracking-[0.2em]">
                {col.label}
              </h4>
              <ul className="text-sm space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-foreground/10 py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Proxyon Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
