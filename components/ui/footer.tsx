import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative text-foreground pt-20 pb-8 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/iklas-999vftR3p4I-unsplash.jpg"
          alt="Footer background"
          fill
          className="object-cover object-center scale-110"
        />
        {/* Radial gradient overlay for vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
        {/* Top gradient for smooth transition */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background via-background/90 to-transparent" />
        {/* Bottom subtle gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Top section: Logo and CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pb-16 border-b border-foreground/20">
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="Proxyon Technologies"
                width={220}
                height={60}
                className="h-14 w-auto invert-100"
              />
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              Powering Zimbabwe&apos;s digital revolution with innovative software solutions that empower businesses across Southern Africa.
            </p>
          </div>
          <div className="lg:text-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground text-balance">
              Let&apos;s work together
            </h2>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 py-16 text-muted-foreground">
          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <div className="text-sm space-y-2">
              <p>Suite 2, Block C</p>
              <p>Highlands Offices</p>
              <p>Harare, Zimbabwe</p>
              <p className="pt-3">+263 77 123 4567</p>
              <p>info@proxyon.tech</p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Agrilease
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Payce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs border-t border-foreground/20 pt-8 text-muted-foreground gap-4">
          <p>
            © {new Date().getFullYear()} Proxyon Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
