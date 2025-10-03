import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { Phone, Mail, MapPin, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      "The first step is a discovery call where we discuss your goals and challenges. From there, we&apos;ll move to a detailed proposal, and upon agreement, we&apos;ll kick off the project with our dedicated team. Just reach out through our contact page to get started!.",
  },
  {
    key: "faq-5",
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages to ensure your software runs smoothly long after launch. This includes updates, bug fixes, security monitoring, and performance optimization to keep your system in top condition.",
  },
];

export default function ContactPage() {
  return (
    <main className="container mx-auto py-12 md:py-20">
      <section className="bg-background text-center flex flex-col justify-center items-center px-8 pb-16">
        <h1 className="text-foreground text-5xl md:text-7xl font-bold leading-tight max-w-5xl text-balance">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-3xl text-pretty leading-relaxed">
          Whether you have a question about our services, want to discuss a potential project, or just want to say hello, we&apos;d love to hear from you. Fill out the form below, and a member of our team will get back to you as soon as possible.
        </p>
      </section>

      <section className="bg-background text-foreground rounded-3xl">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Contact Information */}
            <div className="space-y-8 lg:mt-12">
              <h2 className="text-3xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg">
                Have any questions? We&apos;d love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="rounded-xl h-12 w-12 p-0 flex items-center justify-center border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                  >
                    <Phone className="h-6 w-6" />
                  </Button>
                  <span className="text-lg text-foreground">
                    +263 77 123 4567
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="rounded-xl h-12 w-12 p-0 flex items-center justify-center border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                  >
                    <Mail className="h-6 w-6" />
                  </Button>
                  <span className="text-lg text-foreground">
                    info@proxyon.tech
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="rounded-xl h-12 w-12 p-0 flex items-center justify-center border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                  >
                    <MapPin className="h-6 w-6" />
                  </Button>
                  <span className="text-lg text-foreground">
                    Suite 2, Block C, Highlands Offices, Harare, Zimbabwe
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <ContactForm />
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
    </main>
  );
}

