"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ColorBends from "@/components/ColorBends";
import {
  ArrowRight,
  CreditCard,
  type LucideIcon,
  Plus,
  Tractor,
  Store,
  Globe,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

type Faq = { key: string; question: string; answer: string };
type Project = {
  key: string;
  title: string;
  tagline: string;
  description: string;
  stats: Map<string, React.ReactNode>;
  logo: string;
  url?: string;
};
type Blog = {
  key: string;
  image: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
};
type Stat = {
  key: string;
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    key: "agrilease",
    title: "Agrilease",
    tagline: "Equipment Rental Marketplace",
    description:
      "An intelligent agricultural equipment rental and marketplace platform empowering smallholder farmers across Zimbabwe and Southern Africa with access to mechanization.",
    stats: new Map([
      [
        "Status",
        <Badge key="status-agrilease" variant="default">
          Live
        </Badge>,
      ],
      ["Market", <span key="mkt-agri">Zimbabwe & SADC</span>],
      ["Impact", <span key="imp-agri">Democratizing farm mechanization</span>],
    ]),
    logo: "/logos/agrilease-logo.png",
    url: "https://agrilease.africau.co.zw/",
  },
  {
    key: "payce",
    title: "Payce",
    tagline: "Point of Sale for SMEs",
    description:
      "A comprehensive POS system for SMEs with dedicated mobile and desktop applications designed to streamline business operations.",
    stats: new Map([
      [
        "Status",
        <Badge key="status-payce" variant="default">
          Beta
        </Badge>,
      ],
      ["Platform", <span key="plt-payce">Mobile & Desktop App</span>],
      ["Target", <span key="tgt-payce">Small & Medium Enterprises</span>],
    ]),
    logo: "/logos/payce-logo.svg",
    url: "https://payce.africau.co.zw/",
  },
];

const blogs: Blog[] = [
  {
    key: "blog-1",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "The Future of FinTech in Africa",
    description:
      "Exploring the trends and technologies shaping the future of financial services across the continent.",
    author: "John Doe",
    authorImage: "https://i.pravatar.cc/150?u=john",
    date: "Oct 1, 2025",
  },
  {
    key: "blog-2",
    image:
      "https://images.unsplash.com/photo-1523348830342-d0187cf0c28d?q=80&w=800&auto=format&fit=crop",
    title: "AgriTech: A Revolution in Farming",
    description:
      "How technology is transforming agriculture, from precision farming to supply chain optimization.",
    author: "Jane Smith",
    authorImage: "https://i.pravatar.cc/150?u=jane",
    date: "Sep 25, 2025",
  },
  {
    key: "blog-3",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    title: "The Power of Custom Software",
    description:
      "Why off-the-shelf solutions may not be the best fit for your business and how custom software can help.",
    author: "Peter Jones",
    authorImage: "https://i.pravatar.cc/150?u=peter",
    date: "Sep 15, 2025",
  },
];

const faqs: Faq[] = [
  {
    key: "faq-1",
    question: "What industries do you specialize in?",
    answer:
      "We specialize in FinTech, AgriTech, and custom enterprise solutions for businesses in Zimbabwe and the broader SADC region. Our expertise lies in creating technology that solves local challenges and drives digital transformation.",
  },
  {
    key: "faq-2",
    question: "Can you integrate third-party tools and APIs?",
    answer:
      "Absolutely. We have extensive experience in seamlessly integrating a wide range of third-party services, including payment gateways, analytics platforms, and other essential business tools to create a cohesive and powerful system.",
  },
  {
    key: "faq-3",
    question: "How long does it take to develop a project?",
    answer:
      "Project timelines vary based on complexity, scope, and client requirements. A simple project might take a few weeks, while a complex enterprise system could take several months. We follow an agile methodology to deliver value quickly and adapt to changes.",
  },
  {
    key: "faq-4",
    question: "How do we start working together?",
    answer:
      "The first step is a discovery call where we discuss your goals and challenges. From there, we'll move to a detailed proposal, and upon agreement, we'll kick off the project with our dedicated team. Just reach out through our contact page to get started!",
  },
  {
    key: "faq-5",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your software runs smoothly long after launch. This includes updates, bug fixes, security monitoring, and performance optimization to keep your system in top condition.",
  },
];

const stats: Stat[] = [
  {
    key: "farmers",
    label: "Farmers Connected",
    value: "400+",
    description:
      "Smallholder farmers gaining their first access to mechanization through Agrilease.",
    icon: Tractor,
  },
  {
    key: "transactions",
    label: "Transactions Processed",
    value: "12,000+",
    description:
      "Early-stage payments flowing through the Payce POS platform since beta launch.",
    icon: CreditCard,
  },
  {
    key: "smes",
    label: "SMEs Onboarded",
    value: "60+",
    description: "Small businesses running day-to-day operations on Payce.",
    icon: Store,
  },
  {
    key: "market",
    label: "Home Market",
    value: "Zimbabwe",
    description: "Rooted in Harare, building toward a broader SADC footprint.",
    icon: Globe,
  },
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericPart = value.match(/\d+/g)?.join("") || "";
  const numericValue = parseInt(numericPart);
  const suffix = value.replace(/[0-9,]/g, "");
  const isNumeric = !isNaN(numericValue);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 60,
  });

  useEffect(() => {
    if (isInView && isNumeric) {
      motionValue.set(numericValue);
    }
  }, [motionValue, isInView, numericValue, isNumeric]);

  useEffect(() => {
    if (!isNumeric) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix, isNumeric]);

  if (!isNumeric) return <span>{value}</span>;

  return <span ref={ref}>0{suffix}</span>;
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <ColorBends
            rotation={45}
            speed={1}
            colors={["#2563eb", "#1d4ed8"]}
            transparent
            autoRotate={0.4}
            scale={3}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0}
            parallax={2}
            noise={0}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent z-10" />

        <motion.div
          className="relative z-20 w-full px-6 md:max-w-[75%] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl space-y-8">
            <Badge
              variant="outline"
              className="bg-primary text-primary-foreground font-semibold text-sm py-2 px-6 rounded-full border-none h-auto inline-flex items-center gap-2"
            >
              <Badge
                variant="secondary"
                className="bg-white text-black hover:bg-white/90"
              >
                Latest
              </Badge>
              Digital Transformation Solutions
            </Badge>
            <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
              Powering Zimbabwe&apos;s Digital Revolution
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl text-pretty leading-relaxed">
              We harness innovation to provide cutting-edge software solutions
              that empower businesses to adapt and thrive in the ever-evolving
              digital realm across Southern Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/about">
                <Button className="bg-foreground text-background font-semibold h-14 px-8 rounded-full hover:bg-foreground/90 transition-all duration-200 text-base">
                  Explore Our Solutions
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="h-14 px-8 rounded-full transition-all duration-200 text-base"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Our Ventures ── */}
      <motion.section className="py-24 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-32">
          {/* Section header */}
          <div className="max-w-2xl space-y-4">
            <Badge variant="outline">Our Ventures</Badge>
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold text-foreground">
              Building Africa&apos;s Digital Infrastructure
            </h2>
            <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground leading-[var(--leading-relaxed)]">
              We develop and scale mission-driven platforms that bridge critical
              gaps in mechanization and financial services across the continent.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const metaStats = Array.from(project.stats.entries()).filter(
                ([key]) => key !== "Status",
              );
              return (
                <motion.div
                  key={project.key}
                  className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  {/* Text column */}
                  <div
                    className={cn(
                      "flex flex-col space-y-8",
                      !isEven && "lg:order-2",
                    )}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start gap-5">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                          <Image
                            src={project.logo || "/placeholder.svg"}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-none tracking-tight">
                              {project.title}
                            </h3>
                            {project.stats.get("Status")}
                          </div>
                          <p className="text-xl text-primary font-semibold leading-tight">
                            {project.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full h-12 px-6 text-base font-semibold gap-2 group w-fit"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit {project.title}
                        <Globe className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                      </a>
                    </Button>
                  </div>

                  {/* Stats column */}
                  <div
                    className={cn(
                      "flex flex-col divide-y divide-border/40",
                      !isEven && "lg:order-1",
                    )}
                  >
                    {metaStats.map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-baseline justify-between gap-6 py-6 first:pt-0 last:pb-0"
                      >
                        <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50 flex-shrink-0">
                          {key}
                        </dt>
                        <dd className="text-lg font-semibold text-foreground text-right">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ── Early Traction ── */}
      <motion.section className="py-24 px-6 bg-muted/30" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto">
          <div className="mb-16 space-y-4 text-left">
            <Badge variant="outline">Early Traction</Badge>
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold text-foreground text-balance">
              We&apos;re just getting started.
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)] max-w-lg">
              Honest numbers from an early-stage team. Small today, but every
              figure represents a real business or farmer whose life we&apos;re
              making easier.
            </p>
          </div>

          <motion.div
            className="w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.key}
                className={`grid grid-cols-[1fr_auto] items-center gap-6 md:gap-12 py-8 ${i !== stats.length - 1 ? "border-b border-border/40" : ""}`}
                variants={staggerItem}
              >
                <div className="space-y-1.5 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {stat.label}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                <p className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tighter text-foreground leading-none text-right whitespace-nowrap">
                  <Counter value={stat.value} />
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── FAQ ── */}
      <motion.section className="py-20 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 max-w-md space-y-4">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-snug)] font-bold text-balance">
              Everything You Need To Know
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)]">
              Find answers to common questions about our process, services, and
              how we can partner to build your next big idea.
            </p>
          </div>
          <div className="lg:col-span-7 w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  value={faq.key}
                  className="bg-card/50 border border-border/20 rounded-[2rem] hover:bg-card transition-colors px-2"
                >
                  <AccordionTrigger className="flex items-center justify-between gap-4 p-6 font-bold text-[length:var(--font-size-body-lg)] text-left hover:no-underline [&>svg]:hidden">
                    <span className="text-balance">{faq.question}</span>
                    <div className="flex-shrink-0 p-2 rounded-full border border-border/50 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                      <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground text-[length:var(--font-size-body)] leading-[var(--leading-normal)]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* ── Blog ── */}
      <motion.section className="py-24 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto">
          <div className="mb-12 max-w-xl space-y-4">
            <Badge variant="outline">From the Blog</Badge>
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-snug)] font-bold text-balance">
              Insights and Innovations
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-[var(--leading-relaxed)]">
              Stay updated with the latest trends in technology and our
              perspectives on the digital landscape in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.key}
                className="group cursor-pointer flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 border border-border/40">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 gap-3">
                  <p className="text-[length:var(--font-size-xs)] font-bold uppercase tracking-wider text-primary/60">
                    {blog.date}
                  </p>
                  <h3 className="text-[length:var(--font-size-h4)] font-bold leading-[var(--leading-snug)]">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-[var(--leading-normal)] line-clamp-3 flex-1">
                    {blog.description}
                  </p>
                  <div className="mt-auto pt-5 flex items-center gap-3 border-t border-border/40">
                    <Avatar className="h-9 w-9 border border-border/50 flex-shrink-0">
                      <AvatarImage
                        src={blog.authorImage || "/placeholder.svg"}
                        alt={blog.author}
                      />
                      <AvatarFallback className="bg-card text-xs font-bold">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-[length:var(--font-size-sm)] font-bold text-foreground/90 leading-none">
                        {blog.author}
                      </p>
                      <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mt-0.5">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
