'use client';

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
    <header className="bg-background text-foreground p-6 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Proxyon Technologies Logo"
          width={150}
          className="invert-100"
          height={150}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <Link
                href="/"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground font-semibold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Proxyon Technologies
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Powering Zimbabwe&apos;s digital revolution through
                        innovative software solutions.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="font-medium">
                        Custom Software Development
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        ERP, CRM, and web/mobile applications tailored to your
                        needs.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="font-medium">
                        Digital Payments & FinTech
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        Secure transaction platforms and financial system
                        APIs.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="font-medium">
                        Cloud & Infrastructure
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        Cloud-native development and secure hosting solutions.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent font-semibold text-foreground hover:text-primary transition-colors">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink
                      href="#"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="font-medium flex items-center gap-2">
                        <Tractor size={16} />
                        Agrilease
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
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
                      <div className="font-medium flex items-center gap-2">
                        <CreditCard size={16} />
                        NeX Pay
                      </div>
                      <p className="text-sm text-muted-foreground leading-tight">
                        Cardless mobile payment system revolutionizing African
                        payments.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/blog"
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                Blogs
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex items-center space-x-3">
        <Button
          variant="outline"
          className="text-foreground border-border rounded-full bg-transparent hover:bg-foreground hover:text-background transition-all duration-200"
        >
          Contact Sales
        </Button>
        <Button className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-200">
          Explore Solutions
        </Button>
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
                <Link href="/" className="text-lg font-semibold">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="text-lg font-semibold">About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact" className="text-lg font-semibold">Contact</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/blog" className="text-lg font-semibold">Blogs</Link>
              </SheetClose>
              <div className="flex flex-col space-y-4 pt-4">
                <Button
                  variant="outline"
                  className="text-foreground border-border rounded-full bg-transparent hover:bg-foreground hover:text-background transition-all duration-200"
                >
                  Contact Sales
                </Button>
                <Button className="bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-200">
                  Explore Solutions
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
