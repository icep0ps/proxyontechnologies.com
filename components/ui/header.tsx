"use client";

import Image from "next/image";
import Link from "next/link";
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
import { CreditCard, Tractor, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background text-foreground p-4">
      <div className="flex justify-between items-center md:max-w-[75%] mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Proxyon Technologies Logo"
            width={120}
            className="invert-100"
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
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent font-semibold text-foreground hover:text-primary transition-colors px-3 text-sm">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="font-medium flex items-center gap-2 text-sm">
                          <Image
                            src="/logos/agrilease-logo.png"
                            alt="Agrilease"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          Agrilease
                        </div>
                        <p className="text-xs text-muted-foreground leading-tight">
                          Agricultural equipment rental platform for smallholder
                          farmers.
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="font-medium flex items-center gap-2 text-sm">
                          <Image
                            src="/logos/payce-logo.svg"
                            alt="Payce"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                          Payce
                        </div>
                        <p className="text-xs text-muted-foreground leading-tight">
                          A comprehensive POS system for SMEs with mobile and desktop apps.
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/blog"
                  className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
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
              <Button variant="ghost" size="icon">
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
