"use client";

import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ui/contact-form";
import { Phone, Mail, MapPin, Plus } from "lucide-react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

type Faq = {
  key: string;
  question: string;
  answer: string;
};

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

const contactDetails = [
  { key: "phone", icon: Phone, label: "Phone", value: "+263 77 123 4567" },
  { key: "email", icon: Mail, label: "Email", value: "info@proxyon.tech" },
  {
    key: "address",
    icon: MapPin,
    label: "Office",
    value: "Suite 2, Block C, Highlands Offices, Harare, Zimbabwe",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full py-8 md:py-12 pt-24 md:pt-28">
      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-background">
        <motion.div
          className="w-full md:max-w-[75%] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground/50 mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance max-w-4xl">
            Let&apos;s build something together.
          </h1>
          <div className="mt-12 pt-12 border-t border-border/40">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Whether you have a project in mind, a question about our services,
              or just want to say hello — we&apos;d love to hear from you.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Form Section ── */}
      <motion.section className="py-24 px-6 bg-muted/30" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Column: Header */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="outline">Send a Message</Badge>
              <h2 className="text-[length:var(--font-size-h2)] leading-[var(--leading-tight)] font-bold text-balance">
                Tell us about your project.
              </h2>
              <p className="text-muted-foreground text-[length:var(--font-size-body-lg)] leading-relaxed max-w-md">
                Share a few details and we&apos;ll come back to you with ideas,
                timelines, and next steps.
              </p>

              {/* Contact details — integrated into left column */}
              <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex flex-col gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 w-full h-fit">
              <ContactForm />
            </div>
          </div>
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
                  <AccordionTrigger className="flex items-center justify-between gap-4 p-6 font-bold text-[length:var(--font-size-body)] text-left hover:no-underline [&>svg]:hidden">
                    <span className="text-balance">{faq.question}</span>
                    <div className="flex-shrink-0 p-2 rounded-full border border-border/50 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-all duration-300">
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
      </motion.section>
    </main>
  );
}
