"use client";

import type React from "react";
import * as Marquee from "@/components/ui/marquee";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, margin: "-100px" },
} as const;

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

type TeamMember = {
  key: string;
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    key: "team-1",
    name: "Courtney Taga",
    role: "Co-Founder",
    image: "/avatars/john-doe.jpg",
  },
  {
    key: "team-2",
    name: "Tapiwa Mukoyi",
    role: "Chief Technology Officer",
    image: "/avatars/jane-smith.jpg",
  },
  {
    key: "team-3",
    name: "Tanaka Gombarume",
    role: "Chief Financial Officer",
    image: "/avatars/peter-jones.jpg",
  },
  {
    key: "team-4",
    name: "Leopold Gogode",
    role: "Chief Operating Officer",
    image: "/avatars/sarah-williams.jpg",
  },
  {
    key: "team-5",
    name: "Tinotenda Mukuhwa",
    role: "Chief Information Officer",
    image: "/avatars/sarah-williams.jpg",
  },
];

const milestones = [
  {
    key: "founded",
    date: "Jan 2020",
    label: "Founded",
    description:
      "Proxyon Technologies was born in Harare with a mission to drive digital transformation across Africa.",
    logo: "/logo.svg", // company logo
    href: "/blog/our-founding-story",
  },
  {
    key: "agrilease-launch",
    date: "Mar 2021",
    label: "Agrilease Goes Live",
    description:
      "Our first platform enters the market, connecting smallholder farmers with equipment rental services.",
    logo: "/logos/agrilease-logo.png",
    href: "https://agrilease.africau.co.zw/",
  },
  {
    key: "team",
    date: "Aug 2022",
    label: "Team Grows",
    description:
      "Developers, designers, and strategists join the mission, bringing diverse expertise under one roof.",
    logo: null, // no product, no logo
    href: null,
  },
  {
    key: "payce",
    date: "Jun 2023",
    label: "Payce Launches",
    description:
      "Payce enters beta — a full-featured POS system built for SMEs on mobile and desktop.",
    logo: "/logos/payce-logo.svg",
    href: "https://payce.africau.co.zw/",
  },
  {
    key: "products",
    date: "2024 — Now",
    label: "Products Shipped",
    description:
      "A growing portfolio of live solutions spanning AgriTech, FinTech, and enterprise software.",
    logo: "/logo.svg",
    href: "/blog/2024-year-in-review",
  },
];

const partners = [
  "Econet Wireless",
  "Steward Bank",
  "Old Mutual Zimbabwe",
  "CBZ Holdings",
  "Cassava Smartech",
  "ZB Financial Holdings",
  "Innbucks",
  "NetOne",
];

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-background">
        <motion.div
          className="w-full md:max-w-[75%] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/50 mb-6">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance max-w-4xl">
            Building Africa&apos;s digital future,
            <br className="hidden md:block" /> one product at a time.
          </h1>
          <div className="mt-12 pt-12 border-t border-border/40 grid md:grid-cols-3 gap-8">
            <p className="text-muted-foreground text-base leading-relaxed col-span-2 max-w-xl">
              We are a team of developers, designers, and strategists dedicated
              to building innovative software that drives progress and empowers
              businesses across Southern Africa.
            </p>
            <div className="flex flex-col gap-4 md:items-end md:text-right">
              <div>
                <p className="text-3xl font-bold text-foreground">2020</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">
                  Founded
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Zimbabwe</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mt-1">
                  Home Base
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <motion.section className="py-24 px-6 bg-muted/30" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-16">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Story
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold tracking-tight text-balance max-w-lg">
              From a vision to a movement.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)] max-w-xs md:text-right md:pb-1">
              Founded in 2020, we started as a small team with a big idea —
              leverage technology to solve real problems in Africa. Here&apos;s
              how we got here.
            </p>
          </div>

          <div className="w-full">
            {milestones.map((m, i) => {
              const row = (
                <div
                  className={`grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_1fr] items-start gap-6 md:gap-12 py-8 ${
                    i !== milestones.length - 1
                      ? "border-b border-border/40"
                      : ""
                  }`}
                >
                  {/* Date */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 pt-0.5">
                    {m.date}
                  </p>

                  {/* Label / Logo */}
                  <div className="flex flex-col gap-2">
                    {m.logo ? (
                      <div className="relative h-7 w-24">
                        <Image
                          src={m.logo}
                          alt={`${m.label} logo`}
                          fill
                          className={cn(
                            "object-contain object-left",
                            m.logo === "/logo.svg" && "invert brightness-0 invert"
                          )}
                        />
                      </div>
                    ) : null}
                    <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                      {m.label}
                      {m.href && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary shrink-0 opacity-70" />
                      )}
                    </p>
                  </div>

                  {/* Description — hidden on mobile, shows on md+ */}
                  <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                    {m.description}
                  </p>
                </div>
              );

              return m.href ? (
                <Link
                  key={m.key}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    m.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block group hover:bg-muted/50 transition-colors duration-200 rounded-lg -mx-3 px-3"
                >
                  {row}
                </Link>
              ) : (
                <div key={m.key}>{row}</div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── Vision + Partners ── */}
      <motion.section className="py-24 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-20">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Vision
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold tracking-tight text-balance">
                The leading technology partner for businesses in Africa.
              </h2>
              <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)] max-w-md">
                We aim to be the go-to technology partner for businesses across
                the continent — providing the tools and expertise they need to
                succeed in the digital age.
              </p>
              {/* Partners inline under vision text */}
              <div className="pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                  Trusted by
                </p>
                <div className="relative overflow-hidden">
                  <Marquee.Root gap="2.5rem" duration={35}>
                    <Marquee.Content>
                      {[...partners, ...partners].map((name, i) => (
                        <Marquee.Item key={`${name}-${i}`}>
                          <span className="text-sm font-semibold text-muted-foreground/50 hover:text-foreground/70 transition-colors duration-300 cursor-default whitespace-nowrap">
                            {name}
                          </span>
                        </Marquee.Item>
                      ))}
                    </Marquee.Content>
                  </Marquee.Root>
                  <Marquee.Edge side="left" />
                  <Marquee.Edge side="right" />
                </div>
              </div>
            </div>

            <div className="relative h-[420px] w-full rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="Proxyon Technologies team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Team ── */}
      <motion.section className="py-24 px-6 bg-muted/30" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-20">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              The Team
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="space-y-2 max-w-xl">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold tracking-tight text-balance">
              The people behind the products.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)] pt-2">
              A diverse group of experts spanning strategy, design, engineering,
              and finance — all working toward the same mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">
            {teamMembers.map((member) => (
              <div key={member.key} className="group flex flex-col gap-3">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm leading-snug">
                    {member.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Office ── */}
      <motion.section className="py-24 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Office
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="space-y-2 max-w-xl">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold tracking-tight text-balance">
              Come say hello.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)] pt-2">
              We are based in the heart of Harare, Zimbabwe. We&apos;d love to
              have you over for a cup of coffee.
            </p>
          </div>

          <div className="relative h-[480px] w-full rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/map.png"
              alt="Proxyon Technologies office location"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}
