"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border/40 bg-background text-foreground py-4">
      <div className="flex justify-between items-center md:max-w-[75%] mx-auto px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Proxyon Technologies Logo"
            width={120}
            height={40}
            className="dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex h-9 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-foreground",
                      pathname === link.href
                        ? "text-foreground bg-accent/50"
                        : "text-foreground/70",
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button size="sm" className="rounded-full px-6 font-bold" asChild>
            <Link href="/contact">Work With Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-foreground/80"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-full flex flex-col items-center justify-between px-10 py-20 h-full"
            >
              <SheetHeader className="items-center w-full">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation links for mobile users.
                </SheetDescription>
                <Image
                  src="/logo.svg"
                  alt="Proxyon Technologies Logo"
                  width={140}
                  height={48}
                  className="dark:invert"
                />
              </SheetHeader>

              {/* Nav links */}
              <nav className="flex flex-col items-center gap-4 w-full">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-4xl font-bold tracking-tight leading-tight py-2 transition-all active:scale-95",
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground/40 hover:text-foreground",
                      )}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA and Footer */}
              <div className="w-full flex flex-col items-center">
                <SheetClose asChild>
                  <Button
                    size="lg"
                    className="rounded-full px-10 font-bold w-full max-w-xs h-14 text-base"
                    asChild
                  >
                    <Link href="/contact">Work With Us</Link>
                  </Button>
                </SheetClose>
                <p className="text-xs text-muted-foreground/50 text-center mt-6 font-medium tracking-widest uppercase">
                  Proxyon Technologies · Harare, ZW
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
