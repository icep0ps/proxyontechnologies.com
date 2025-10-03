import type React from "react";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Building,
  Users,
  Lightbulb,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

type TeamMember = {
  key: string;
  name: string;
  role: string;
  initials: string;
  image: string;
  socials: {
    name: string;
    url: string;
    icon: React.ElementType;
  }[];
};

const teamMembers: TeamMember[] = [
  {
    key: "team-1",
    name: "Courtney Taga",
    role: "Co-Founder (CO-Founder)", // Updated role
    initials: "CT",
    image: "/avatars/john-doe.jpg",
    socials: [
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "GitHub", url: "#", icon: Github },
    ],
  },
  {
    key: "team-2",
    name: "Tapiwa Mukoyi",
    role: "Chief Technology Officer (CTO)", // Updated role
    initials: "TM",
    image: "/avatars/jane-smith.jpg",
    socials: [
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "GitHub", url: "#", icon: Github },
    ],
  },
  {
    key: "team-3",
    name: "Tanaka Gombarume",
    role: "Chief Financial Officer (CFO)", // Updated role
    initials: "TG",
    image: "/avatars/peter-jones.jpg",
    socials: [
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "GitHub", url: "#", icon: Github },
    ],
  },
  {
    key: "team-4",
    name: "Leopold Gogode",
    role: "Chief Operating Officer (COO)", // Updated role
    initials: "SW",
    image: "/avatars/sarah-williams.jpg",
    socials: [
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "GitHub", url: "#", icon: Github },
    ],
  },
  {
    key: "team-5",
    name: "Tinotenda Mukuhwa",
    role: "Chief Information Officer (CIO)", // Updated role
    initials: "TM",
    image: "/avatars/sarah-williams.jpg",
    socials: [
      { name: "Twitter", url: "#", icon: Twitter },
      { name: "LinkedIn", url: "#", icon: Linkedin },
      { name: "GitHub", url: "#", icon: Github },
    ],
  },
];
export default function AboutPage() {
  return (
    <main className="container mx-auto">
      <section className="bg-background text-center flex flex-col justify-center items-center px-8 py-16">
        <h1 className="text-foreground text-5xl md:text-7xl font-bold leading-tight max-w-5xl text-balance">
          About Proxyon Technologies
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-3xl text-pretty leading-relaxed">
          We are a team of passionate developers, designers, and strategists
          dedicated to building innovative software solutions that drive
          progress and empower businesses in Africa.
        </p>
      </section>

      <section className="bg-card text-foreground py-20 px-6 space-y-8 rounded-3xl my-8">
        <div className="container mx-auto">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-background/50">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                From a Vision to a Movement
              </h2>
            </div>
            <div className="text-muted-foreground text-base space-y-4 leading-relaxed">
              <p>
                Proxyon Technologies was founded in 2020 with a simple yet
                powerful vision: to leverage technology to solve real-world
                problems in Africa. We started as a small team of passionate
                developers and have since grown into a leading software
                development company in Zimbabwe, with a diverse team of experts
                and a portfolio of successful projects.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Building size={24} className="text-primary" />
                  <CardTitle className="text-2xl font-bold">2020</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proxyon Technologies was founded with a mission to drive
                  digital transformation in Africa.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users size={24} className="text-primary" />
                  <CardTitle className="text-2xl font-bold">10+</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grown to a team of over 10 passionate developers, designers,
                  and strategists.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl p-6 hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Lightbulb size={24} className="text-primary" />
                  <CardTitle className="text-2xl font-bold">5+</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Launched over 5 innovative products that are transforming
                  industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
            <Image
              src="/office.jpg"
              alt="Proxyon Technologies office"
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-500 "
            />
          </div>
          <div>
            <div className="max-w-3xl mb-12">
              <Badge variant="outline" className="mb-4">
                Our Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                To be the leading technology partner for businesses in Africa.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We aim to be the go-to technology partner for businesses in
                Africa, providing them with the tools and expertise they need to
                succeed in the digital age. We are committed to building a
                better future for Africa, one line of code at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container">
          <Badge
            variant="outline"
            className="mb-4 text-primary-foreground bg-primary border-none"
          >
            Contact us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance max-w-4xl ">
            Meet the Team Ready to Build Your Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-8">
            Our diverse team is composed of dedicated and seasoned experts
            across every crucial domain, from strategic planning and
            cutting-edge design to robust engineering.{" "}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-16 text-left">
            {teamMembers.map((member) => (
              <div key={member.key} className="group cursor-pointer">
                <div className="relative w-full aspect-[4/5] bg-muted rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div
                  className={`p-3 mt-2 rounded-lg transition-all duration-300 ${
                    member.isActive
                      ? "bg-muted border border-border"
                      : "group-hover:bg-muted"
                  }`}
                >
                  <h3 className="font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <Badge variant="outline" className="mb-4">
              Our Office
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Come and say hello
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are located in the heart of Harare, Zimbabwe. We would love to
              have you over for a cup of coffee.
            </p>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden shadow-xl bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
            <Image
              src="/map.png"
              alt="Proxyon Technologies office location"
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-105 transition-transform duration-500 "
            />
          </div>
        </div>
      </section>


    </main>
  );
}
