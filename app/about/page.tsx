import type React from "react";
import * as Marquee from "@/components/ui/marquee";
import { Building, Users, Lightbulb } from "lucide-react";
import Image from "next/image";

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
    icon: Building,
  },
  {
    key: "agrilease-launch",
    date: "Mar 2021",
    label: "Agrilease Goes Live",
    description:
      "Our first platform enters the market, connecting smallholder farmers with equipment rental services.",
    icon: Lightbulb,
  },
  {
    key: "team",
    date: "Aug 2022",
    label: "Team Grows",
    description:
      "Developers, designers, and strategists join the mission, bringing diverse expertise under one roof.",
    icon: Users,
  },
  {
    key: "payce",
    date: "Jun 2023",
    label: "Payce Launches",
    description:
      "Payce enters beta — a full-featured POS system built for SMEs on mobile and desktop.",
    icon: Building,
  },
  {
    key: "products",
    date: "2024 — Now",
    label: "Products Shipped",
    description:
      "A growing portfolio of live solutions spanning AgriTech, FinTech, and enterprise software.",
    icon: Lightbulb,
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
        <div className="w-full md:max-w-[75%] mx-auto">
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
        </div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="w-full md:max-w-[75%] mx-auto space-y-16">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Story
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-balance max-w-lg">
              From a vision to a movement.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs md:text-right md:pb-1">
              Founded in 2020, we started as a small team with a big idea —
              leverage technology to solve real problems in Africa. Here&apos;s
              how we got here.
            </p>
          </div>

          <div className="w-full">
            {milestones.map((m, i) => (
              <div
                key={m.key}
                className={`grid grid-cols-[6rem_1fr] md:grid-cols-[8rem_1fr_1fr] items-start gap-6 md:gap-12 py-8 ${
                  i !== milestones.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                {/* Date */}
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 pt-0.5">
                  {m.date}
                </p>

                {/* Label */}
                <p className="text-sm font-bold text-foreground">{m.label}</p>

                {/* Description — hidden on mobile, shows on md+ */}
                <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision + Partners ── */}
      <section className="py-24 px-6 bg-background">
        <div className="w-full md:max-w-[75%] mx-auto space-y-20">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Vision
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-balance">
                The leading technology partner for businesses in Africa.
              </h2>
              <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-relaxed max-w-md">
                We aim to be the go-to technology partner for businesses across
                the continent — providing the tools and expertise they need to
                succeed in the digital age.
              </p>

              {/* Partners inline under vision text */}
              <div className="pt-6 border-t border-border/40 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                  Trusted by
                </p>
                <div className="relative overflow-hidden">
                  <Marquee.Root gap="2.5rem" duration={35}>
                    <Marquee.Content>
                      {partners.map((name) => (
                        <Marquee.Item key={name}>
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
      </section>

      {/* ── Team ── */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="w-full md:max-w-[75%] mx-auto space-y-20">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              The Team
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="space-y-2 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-balance">
              The people behind the products.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-relaxed pt-2">
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
      </section>

      {/* ── Office ── */}
      <section className="py-24 px-6 bg-background">
        <div className="w-full md:max-w-[75%] mx-auto space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Our Office
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <div className="space-y-2 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-balance">
              Come say hello.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-relaxed pt-2">
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
      </section>
    </main>
  );
}
