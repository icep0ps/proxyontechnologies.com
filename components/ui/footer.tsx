import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground pt-16 pb-6 px-8 md:px-6">
      <div className="container mx-auto space-y-12">
        {/* Top section: CTA */}
        <div className="flex justify-between items-center border-y border-white/30 py-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground text-balance">
            Let&apos;s work together
          </h2>

          <ArrowUpRight className="h-20 w-20 text-primary" />
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <div className="text-foreground text-xl font-bold">
              Proxyon Technologies
            </div>
            <div className="text-sm space-y-1">
              <p>Suite 2, Block C, Highlands Offices</p>
              <p>Harare, Zimbabwe</p>
              <p>+263 77 123 4567</p>
              <p>info@proxyon.tech</p>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Digital Payments & FinTech
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Data Analytics & Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Agrilease
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  NeX Pay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs border-t border-white/30 pt-6">
          <p>
            © {new Date().getFullYear()} Proxyon Technologies. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 sm:mt-0">
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
