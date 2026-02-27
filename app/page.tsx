import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowUpRight,
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
import { LightRays } from "@/components/ui/light-rays";
import { cn } from "@/lib/utils";

type Faq = {
  key: string;
  question: string;
  answer: string;
};

type Service = {
  key: string;
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  hasGlow: boolean;
  status: "Live" | "Beta" | "New";
  detail: string;
};

type Project = {
  key: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  stats: Map<string, React.ReactNode>;
  logo: string;
  url?: string;
  brandColor?: string;
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

const projects: Project[] = [
  {
    key: "agrilease",
    image: "/agricultural-equipment-rental-rental-platform-interface.jpg",
    title: "Agrilease",
    tagline: "Equipment Rental Marketplace",
    description:
      "An intelligent agricultural equipment rental and marketplace platform empowering smallholder farmers across Zimbabwe and Southern Africa with access to mechanization.",
    stats: new Map([
      [
        "Status",
        <Badge key="status-agrilease" variant="default" className="bg-green-500 hover:bg-green-600">
          Live
        </Badge>,
      ],
      ["Market", <span key="mkt-agri">Zimbabwe & SADC</span>],
      ["Impact", <span key="imp-agri">Democratizing farm mechanization</span>],
    ]),
    logo: "/logos/agrilease-logo.png",
    url: "https://agrilease.co.zw",
    brandColor: "#22c55e",
  },
  {
    key: "payce",
    image: "/mobile-payment-app-interface-with-nfc-and-qr-code.jpg",
    title: "Payce",
    tagline: "Point of Sale for SMEs",
    description:
      "A comprehensive POS system for SMEs with dedicated mobile and desktop applications designed to streamline business operations.",
    stats: new Map([
      [
        "Status",
        <Badge key="status-payce" variant="default" className="bg-blue-600 hover:bg-blue-700">
          Beta
        </Badge>,
      ],
      ["Platform", <span key="plt-payce">Mobile & Desktop App</span>],
      ["Target", <span key="tgt-payce">Small & Medium Enterprises</span>],
    ]),
    logo: "/logos/payce-logo.svg",
    url: "https://payce.co.zw",
    brandColor: "#0000ff",
  },
];

const blogs: Blog[] = [
  {
    key: "blog-1",
    image: "/blog/post-one.jpg",
    title: "The Future of FinTech in Africa",
    description:
      "Exploring the trends and technologies shaping the future of financial services across the continent.",
    author: "John Doe",
    authorImage: "/avatars/john-doe.jpg",
    date: "Oct 1, 2025",
  },
  {
    key: "blog-2",
    image: "/blog/post-two.jpg",
    title: "AgriTech: A Revolution in Farming",
    description:
      "How technology is transforming agriculture, from precision farming to supply chain optimization.",
    author: "Jane Smith",
    authorImage: "/avatars/jane-smith.jpg",
    date: "Sep 25, 2025",
  },
  {
    key: "blog-3",
    image: "/blog/post-three.jpg",
    title: "The Power of Custom Software",
    description:
      "Why off-the-shelf solutions may not be the best fit for your business and how custom software can help.",
    author: "Peter Jones",
    authorImage: "/avatars/peter-jones.jpg",
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
      "The first step is a discovery call where we discuss your goals and challenges. From there, we'll move to a detailed proposal, and upon agreement, we'll kick off the project with our dedicated team. Just reach out through our contact page to get started!.",
  },
  {
    key: "faq-5",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your software runs smoothly long after launch. This includes updates, bug fixes, security monitoring, and performance optimization to keep your system in top condition.",
  },
];

type Stat = {
  key: string;
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  {
    key: "farmers",
    label: "Farmers Empowered",
    value: "15,000+",
    description: "Providing access to mechanization and credit through Agrilease.",
    icon: Tractor,
  },
  {
    key: "transactions",
    label: "Digital Transactions",
    value: "2.5M+",
    description: "Secure payments facilitated through our Payce POS infrastructure.",
    icon: CreditCard,
  },
  {
    key: "smes",
    label: "SME Partners",
    value: "500+",
    description: "Businesses optimizing their operations with our digital tools.",
    icon: Store,
  },
  {
    key: "market",
    label: "Market Presence",
    value: "3 Countries",
    description: "Expanding our footprint across the SADC region.",
    icon: Globe,
  },
];

export default function Home() {
  return (
    <main className="md:max-w-[75%] mx-auto space-y-12">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/alexander-x-KtUjim68XEc-unsplash.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-60"
          />
          {/* Gradients to blend image with site background */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/20 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-background/20" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-40">
          <div className="max-w-5xl space-y-6">
            <Badge
              variant="outline"
              className="bg-primary font-semibold text-sm py-3 px-6 rounded-full transition-colors border-none"
            >
              <Badge key="new-badge" variant="secondary" className="mr-2">
                New
              </Badge>
              Digital Transformation Solutions →
            </Badge>
            <h1 className="text-white text-[length:var(--font-size-display)] leading-[var(--leading-tight)] font-bold text-balance max-w-3xl">
              Powering Zimbabwe&apos;s Digital Revolution
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
              <p className="text-white/80 text-[length:var(--font-size-body-lg)] max-w-xl text-pretty leading-[var(--leading-normal)]">
                We harness innovation to provide cutting-edge software solutions
                that empower businesses to adapt and thrive in the ever-evolving
                digital realm across Southern Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                <Button className="bg-white text-black font-semibold py-6 px-8 rounded-full hover:bg-white/90 transition-all duration-200 text-base">
                  Explore Our Solutions <ArrowRight className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white/30 py-6 px-8 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-200 text-base"
                >
                  Contact Sales <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Ventures (Zig-Zag Layout) */}
      <section className="py-20 px-6 bg-background">
        <div className="w-full">
          <div className="space-y-6 mb-16 text-left max-w-3xl">
            <Badge variant="outline" className="mb-4 bg-card border-border/50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary/80">
              Our Ventures
            </Badge>
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold text-foreground">
              Building Africa&apos;s Digital Infrastructure
            </h2>
            <p className="text-[length:var(--font-size-body)] text-muted-foreground leading-[var(--leading-normal)]">
              We develop and scale mission-driven platforms that bridge critical gaps in mechanization and financial services across the continent.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={project.key} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Image Container */}
                  <div className={cn("relative group", !isEven && "lg:order-2")}>
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} interface`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-10" 
                        style={{ backgroundColor: project.brandColor }}
                      />
                    </div>
                    {/* Floating Logo Badge */}
                    <div className="absolute -bottom-8 -right-8 lg:bottom-8 lg:-right-12 bg-card p-4 rounded-2xl shadow-xl border border-border/50 hidden sm:block">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className={cn("flex flex-col justify-center space-y-8", !isEven && "lg:order-1")}>
                    <div>
                      <h3 className="text-[length:var(--font-size-h2)] font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xl text-primary font-medium mb-6">{project.tagline}</p>
                      <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Stats mini grid */}
                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-border/40">
                      {Array.from(project.stats.entries()).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-1">
                          <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{key}</span>
                          <div className="text-foreground font-medium">{value}</div>
                        </div>
                      ))}
                    </div>

                    <Button asChild size="lg" className="w-fit rounded-full group">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit {project.title} 
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measurable Impact Section - Borderless Typographic Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="w-full grid lg:grid-cols-12 items-center gap-16 lg:gap-24">
          {/* Header Column */}
          <div className="lg:col-span-5 max-w-md">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-snug)] font-bold text-foreground mb-4">
              Measurable Impact at Scale
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-[var(--leading-normal)]">
              We don&apos;t just build software; we build ecosystems that drive
              real-world economic growth and operational efficiency.
            </p>
          </div>

          {/* Data Grid Column - Clean & Borderless */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 w-full h-fit">
            {stats.map((stat) => (
              <div
                key={stat.key}
                className="flex flex-col justify-center gap-4 transition-all duration-500 group"
              >
                <div className="text-4xl xl:text-5xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 leading-none whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {stat.label}
                  </div>
                  <div className="text-muted-foreground text-xs lg:text-sm leading-relaxed max-w-[220px]">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background text-foreground py-20 px-6">
        <div className="md:max-w-[100%] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Title */}
          <div className="lg:col-span-5 max-w-md">
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-snug)] font-bold text-balance mb-6">
              Everything You Need To Know
            </h2>
            <p className="text-muted-foreground mt-4 text-[length:var(--font-size-body)] leading-[var(--leading-normal)]">
              Find answers to common questions about our process, services, and
              how we can partner to build your next big idea.
            </p>
          </div>
          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  value={faq.key}
                  className="bg-card/50 border border-border/20 rounded-[2rem] transition-colors hover:bg-card px-2"
                >
                  <AccordionTrigger className="w-full flex items-center justify-between p-6 font-bold text-[length:var(--font-size-body)] text-left hover:no-underline [&>svg]:hidden">
                    <span className="text-balance">{faq.question}</span>
                    <div className="flex-shrink-0 ml-4 p-2 rounded-full border border-border/50 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                      <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground text-[length:var(--font-size-sm)] leading-[var(--leading-normal)]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-background text-foreground py-20 px-6 mb-12">
        <div className="w-full">
          {/* Header */}
          <div className="mb-12 max-w-xl">
            <Badge variant="outline" className="mb-4 bg-background/50 border-border/50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary/80">
              From the Blog
            </Badge>
            <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-snug)] font-bold text-balance mb-4">
              Insights and Innovations
            </h2>
            <p className="text-muted-foreground text-[length:var(--font-size-body)] leading-[var(--leading-normal)]">
              Stay updated with the latest trends in technology and our
              perspectives on the digital landscape in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article key={blog.key} className="group cursor-pointer flex flex-col h-full">
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 border border-border/40">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={`${blog.title} blog post image`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-md border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Featured</Badge>
                    </div>
                  )}
                </div>
                <div className="space-y-3 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-[length:var(--font-size-sm)] font-bold uppercase tracking-wider text-primary/60">
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="text-[length:var(--font-size-h4)] font-bold leading-[var(--leading-snug)] group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-[length:var(--font-size-sm)] leading-[var(--leading-normal)] line-clamp-3 mb-6">
                    {blog.description}
                  </p>
                  <div className="mt-auto pt-6 flex items-center gap-4 border-t border-border/40">
                    <Avatar className="h-10 w-10 border border-border/50">
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
                    <div className="flex flex-col">
                      <span className="text-[length:var(--font-size-sm)] font-bold text-foreground/90">
                        {blog.author}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Author</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
