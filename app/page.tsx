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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
        <Badge key="status-agrilease" variant="default">
          Live
        </Badge>,
      ],
      ["Market", <span>Zimbabwe & SADC</span>],
      ["Impact", <span>Democratizing farm mechanization</span>],
    ]),
    logo: "/logos/agrilease-logo.png",
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
        <Badge key="status-payce" variant="default">
          Beta
        </Badge>,
      ],
      ["Platform", <span>Mobile & Desktop App</span>],
      ["Target", <span>Small & Medium Enterprises</span>],
    ]),
    logo: "/logos/payce-logo.svg",
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
    <main className="container mx-auto">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-end overflow-hidden rounded-b-3xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/alexander-x-KtUjim68XEc-unsplash.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
          {/* Top gradient for smooth navbar transition */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/50 to-transparent" />
          {/* Bottom gradient for smooth section transition */}
          <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background via-background/80 to-transparent" />
          {/* Left gradient for smooth side transition */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent" />
          {/* Right gradient for smooth side transition */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent" />
          {/* Overall overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pb-16 pt-40">
          <div className="max-w-5xl space-y-6">
            <Badge
              variant="outline"
              className="bg-primary font-semibold text-sm py-2 px-4 rounded-full transition-colors border-none"
            >
              <Badge key="new-badge" variant="secondary" className="mr-2">
                New
              </Badge>
              Digital Transformation Solutions →
            </Badge>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance max-w-3xl">
              Powering Zimbabwe&apos;s Digital Revolution
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
              <p className="text-white/80 text-lg md:text-xl max-w-xl text-pretty leading-relaxed">
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

      <section className="bg-card text-foreground py-20 px-6 space-y-8 rounded-3xl my-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-background/50">
                Our Subsidiaries
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                Innovative Solutions for Real-World Challenges
              </h2>
            </div>
            <div className="text-muted-foreground text-base space-y-4 leading-relaxed">
              <p>
                Our subsidiary companies, Agrilease and NeX Pay, represent our
                commitment to solving critical challenges in agriculture and
                financial inclusion across Africa. Each platform is designed
                with local needs in mind while leveraging cutting-edge
                technology.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.key}
                className="p-8 flex flex-col justify-between"
              >
                <div>
                  <CardHeader className="px-0 pb-4 pt-0">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={64}
                        height={64}
                        className="object-contain flex-shrink-0"
                      />
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm font-medium text-primary mt-1">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-base text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="px-0 pb-0 mt-4">
                  <div className="space-y-3 mb-8">
                    {Array.from(project.stats.entries()).map(
                      ([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {label}:
                          </span>
                          <span className="font-medium text-foreground">
                            {value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  <Button variant="outline" size="icon" className="rounded-2xl border-border/60 hover:bg-foreground hover:text-background transition-all duration-200 h-12 w-12 group/btn">
                    <ArrowUpRight className="h-6 w-6 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Button>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-32 pb-12 bg-background px-6 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-6 bg-card border-border/50">
                Our Global Impact
              </Badge>
              <h2 className="text-foreground">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9]">
                  Scalable Solutions.
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mt-2 text-muted-foreground">
                  Real World Results.
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed border-l-2 border-primary/50 pl-8 hidden md:block">
              We build technology that transforms industries and empowers people across the African continent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-y border-border">
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className={cn(
                  "relative p-12 group transition-all duration-500 hover:bg-card",
                  index !== stats.length - 1 && "lg:border-r border-border",
                  index % 2 === 0 && "sm:border-r lg:border-r-0 border-border",
                  index < 2 && "border-b lg:border-b-0 border-border"
                )}
              >
                {/* Subtle hover indicator */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full" />

                <div className="space-y-6">
                  <span className="text-xs font-bold text-primary/60 uppercase tracking-[0.2em]">
                    0{index + 1} {stat.label.split(' ')[0]}
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-6xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold text-foreground">
                      {stat.label}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Title */}
          <div className="max-w-md">
            <h2 className="text-5xl font-bold leading-tight text-balance">
              Everything You Need To Know
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Find answers to common questions about our process, services, and
              how we can partner to build your next big idea.
            </p>
          </div>
          {/* Right Column: Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  value={faq.key}
                  className="bg-card/50 border border-border/20 rounded-xl transition-colors hover:bg-card"
                >
                  <AccordionTrigger className="w-full flex items-center justify-between p-6 font-semibold text-lg text-left hover:no-underline [&>svg]:hidden">
                    <span className="text-balance">{faq.question}</span>
                    <div className="flex-shrink-0 ml-4 p-2 rounded-full border border-border/50 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
                      <Plus className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-card text-foreground py-24 px-6 rounded-3xl my-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-xl">
            <Badge variant="outline" className="mb-4 bg-background/50">
              From the Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Insights and Innovations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay updated with the latest trends in technology and our
              perspectives on the digital landscape in Africa.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={blog.key}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={`${blog.title} blog post image`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={blog.authorImage || "/placeholder.svg"} alt={blog.author} />
                      <AvatarFallback>{blog.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{blog.author}</span>
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