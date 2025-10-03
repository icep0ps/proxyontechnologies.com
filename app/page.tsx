import Image from "next/image";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Cloud,
  Palette,
  CreditCard,
  type LucideIcon,
  Plus,
} from "lucide-react";
import Link from "next/link";
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
  description: string;
  stats: Map<string, React.ReactNode>;
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
  },
  {
    key: "nexpay",
    image: "/mobile-payment-app-interface-with-nfc-and-qr-code.jpg",
    title: "NeX Pay",
    description:
      "A revolutionary cardless, mobile-based money transfer system enabling fast, secure digital payments without traditional banking infrastructure across Africa.",
    stats: new Map([
      [
        "Status",
        <Badge key="status-nexpay" variant="default">
          Beta
        </Badge>,
      ],
      ["Technology", <span>NFC + QR Payments</span>],
      ["Target", <span>Pan-African expansion</span>],
    ]),
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

const services: Service[] = [
  {
    key: "custom-software",
    href: "/services/custom-software",
    icon: Code,
    title: "Custom Software Development",
    description:
      "We build bespoke software solutions tailored to your specific business needs, from web and mobile apps to enterprise systems.",
    hasGlow: true,
    status: "New",
    detail: "Starts at $5,000",
  },
  {
    key: "digital-transformation",
    href: "/services/digital-transformation",
    icon: Cloud,
    title: "Digital Transformation",
    description:
      "We help you modernize your business processes and infrastructure to stay competitive in the digital age.",
    hasGlow: false,
    status: "Live",
    detail: "Consultation-based",
  },
  {
    key: "fintech-solutions",
    href: "/services/fintech-solutions",
    icon: CreditCard,
    title: "Fintech Solutions",
    description:
      "We create innovative financial technology solutions to improve financial inclusion and efficiency in Africa.",
    hasGlow: false,
    status: "Live",
    detail: "Partnership-based",
  },
  {
    key: "agritech-platforms",
    href: "/services/agritech-platforms",
    icon: Palette,
    title: "Agritech Platforms",
    description:
      "We develop technology platforms to optimize agricultural value chains and empower farmers in the SADC region.",
    hasGlow: false,
    status: "Beta",
    detail: "Pilot programs available",
  },
];



export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="min-h-screen bg-background text-center flex flex-col justify-center items-center px-8 py-16">
        <Badge
          variant="outline"
          className="bg-primary font-semibold text-sm py-2 px-4 rounded-full mb-6 transition-colors border-none"
        >
          <Badge key="new-badge" variant="secondary" className="mr-2">
            New
          </Badge>
          Digital Transformation Solutions →
        </Badge>
        <h1 className="text-foreground text-5xl md:text-7xl font-bold leading-tight max-w-5xl text-balance">
          Powering Zimbabwe&apos;s Digital Revolution
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-3xl text-pretty leading-relaxed">
          We harness innovation to provide cutting-edge software solutions that
          empower businesses to adapt and thrive in the ever-evolving digital
          realm across Southern Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button className="bg-primary text-primary-foreground font-semibold py-6 px-8 rounded-full hover:bg-primary/90 transition-all duration-200 text-base">
            Explore Our Solutions <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="text-foreground border-border py-6 px-8 rounded-full bg-transparent hover:bg-foreground hover:text-background transition-all duration-200 text-base"
          >
            Contact Sales <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      <section className="bg-card text-foreground py-20 px-6 space-y-8 rounded-3xl my-8">
        <div className="container mx-auto">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
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
              <Card
                key={project.key}
                className="rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <div className="relative w-full h-56 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} platform interface`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="px-0 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">
                      {project.title}
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-foreground border-border rounded-full bg-transparent hover:bg-foreground hover:text-background transition-all duration-200"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Button>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-3">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative h-[500px] w-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
            <Image
              src="/developer.jpg"
              alt="A software developer working at a desk"
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-500 "
            />
          </div>
          {/* Right Column: Services */}
          <div>
            <div className="max-w-3xl mb-12">
              <Badge variant="outline" className="mb-4">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From custom software development to digital transformation
                consulting, we provide end-to-end technology solutions that
                drive business growth and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-border/20 rounded-2xl overflow-hidden">
              {services.map((service, index) => (
                <Link
                  href={service.href}
                  key={service.key}
                  className={`group relative overflow-hidden transition-all duration-300 hover:bg-card/50 ${
                    index % 2 !== 1 ? "sm:border-r border-border/20" : ""
                  } ${
                    index < services.length - 2
                      ? "border-b border-border/20"
                      : ""
                  }`}
                >
                  <div className="p-8 transition-colors flex flex-col justify-between items-start relative z-10 h-full min-h-[280px]">
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent transition-opacity duration-300 ${
                        service.hasGlow
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Top content */}
                    <div className="relative z-20 w-full">
                      <div className="flex items-center justify-between mb-6">
                        <Button
                          variant="outline"
                          className="rounded-xl h-12 w-12 p-0 flex items-center justify-center border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                          aria-hidden="true"
                        >
                          <service.icon size={20} />
                        </Button>
                        <ArrowUpRight
                          size={18}
                          strokeWidth={2}
                          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-muted-foreground group-hover:text-primary"
                        />
                      </div>
                      <h4 className="font-semibold text-lg leading-tight mb-3 text-balance">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom content */}
                    <div className="relative z-20 w-full mt-6">
                      <div className="border-t border-border/20 pt-4 flex justify-between items-center text-xs">
                        <Badge
                          key={`status-${service.key}`}
                          variant={
                            service.status === "New" ? "default" : "secondary"
                          }
                          className="px-3 py-1 text-xs font-medium"
                        >
                          {service.status}
                        </Badge>
                        <span className="text-muted-foreground text-right font-medium">
                          {service.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <Badge variant="outline" className="mb-4">
              From the Blog
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Insights and Innovations
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay updated with the latest trends in technology and our
              perspectives on the digital landscape in Africa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.key}
                className="rounded-3xl p-0 hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden"
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={`${blog.title} blog post image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="px-0 pb-4">
                    <CardTitle className="text-xl font-bold mb-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {blog.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <div className="flex items-center space-x-3 mt-4">
                      <Avatar>
                        <AvatarImage
                          src={blog.authorImage || "/placeholder.svg"}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-xs">{blog.author}</p>
                        <p className="text-muted-foreground text-xs">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
