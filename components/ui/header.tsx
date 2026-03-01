"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background text-foreground">
      <div className="flex justify-between items-center md:max-w-[75%] mx-auto p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Proxyon Technologies Logo"
            width={120}
            className="dark:invert"
            height={120}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground"
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground"
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors text-foreground/80 hover:text-foreground"
                >
                  Blogs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <SheetContent side="left" className="w-full">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  A list of navigation links for mobile users.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-center space-y-4 p-6">
                <SheetClose asChild>
                  <Link href="/" className="text-lg font-semibold">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-lg font-semibold">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="text-lg font-semibold">
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/blog" className="text-lg font-semibold">
                    Blogs
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
