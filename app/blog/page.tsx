"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

type Blog = {
  key: string;
  slug: string;
  image: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
};

const blogs: Blog[] = [
  {
    key: "blog-1",
    slug: "the-future-of-fintech-in-africa",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    title: "The Future of FinTech in Africa",
    description:
      "Exploring the trends and technologies shaping the future of financial services across the continent.",
    author: "John Doe",
    authorImage: "https://i.pravatar.cc/150?u=john",
    date: "Oct 1, 2025",
    category: "FinTech",
  },
  {
    key: "blog-2",
    slug: "agritech-a-revolution-in-farming",
    image:
      "https://images.unsplash.com/photo-1523348830342-d0187cf0c28d?q=80&w=800&auto=format&fit=crop",
    title: "AgriTech: A Revolution in Farming",
    description:
      "How technology is transforming agriculture, from precision farming to supply chain optimization.",
    author: "Jane Smith",
    authorImage: "https://i.pravatar.cc/150?u=jane",
    date: "Sep 25, 2025",
    category: "AgriTech",
  },
  {
    key: "blog-3",
    slug: "the-power-of-custom-software",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    title: "The Power of Custom Software",
    description:
      "Why off-the-shelf solutions may not be the best fit for your business and how custom software can help.",
    author: "Peter Jones",
    authorImage: "https://i.pravatar.cc/150?u=peter",
    date: "Sep 15, 2025",
    category: "Software Development",
  },
  {
    key: "blog-4",
    slug: "cloud-computing-in-africa",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    title: "Cloud Computing in Africa",
    description:
      "The rise of cloud computing in Africa and its impact on businesses.",
    author: "John Doe",
    authorImage: "https://i.pravatar.cc/150?u=john",
    date: "Aug 28, 2025",
    category: "Cloud",
  },
  {
    key: "blog-5",
    slug: "the-importance-of-ui-ux-design",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800&auto=format&fit=crop",
    title: "The Importance of UI/UX Design",
    description:
      "How a good UI/UX design can improve user satisfaction and increase conversions.",
    author: "Jane Smith",
    authorImage: "https://i.pravatar.cc/150?u=jane",
    date: "Aug 15, 2025",
    category: "Design",
  },
  {
    key: "blog-6",
    slug: "data-analytics-for-business-growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    title: "Data Analytics for Business Growth",
    description:
      "How to use data analytics to make informed decisions and drive business growth.",
    author: "Peter Jones",
    authorImage: "https://i.pravatar.cc/150?u=peter",
    date: "Jul 30, 2025",
    category: "Data Analytics",
  },
];

const categories = [
  "All",
  "FinTech",
  "AgriTech",
  "Software Development",
  "Cloud",
  "Design",
  "Data Analytics",
];

export default function BlogPage() {
  const [filter, setFilter] = useState("All");

  const latest = blogs.reduce((a, b) =>
    new Date(b.date) > new Date(a.date) ? b : a,
  );
  const filtered = blogs.filter(
    (b) => (filter === "All" || b.category === filter) && b.key !== latest.key,
  );

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
            From the Blog
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance max-w-4xl">
            Insights and innovations.
          </h1>
          <div className="mt-12 pt-12 border-t border-border/40">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              Perspectives on the digital landscape in Africa — from FinTech and
              AgriTech to design and engineering.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Latest post ── */}
      <motion.section className="py-24 px-6 bg-muted/30" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-16">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
              Latest Post
            </span>
            <div className="flex-1 h-px bg-border/40" />
          </div>

          <Link
            href={`/blog/${latest.slug}`}
            className="group grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-border/40">
              <Image
                src={latest.image || "/placeholder.svg"}
                alt={latest.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{latest.category}</Badge>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                  {latest.date}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-balance">
                {latest.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {latest.description}
              </p>
              <div className="pt-5 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 border border-border/50 flex-shrink-0">
                    <AvatarImage src={latest.authorImage} alt={latest.author} />
                    <AvatarFallback className="text-xs font-bold">
                      {latest.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-foreground/90 leading-none">
                      {latest.author}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mt-0.5">
                      Author
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground/30" />
              </div>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* ── All posts ── */}
      <motion.section className="py-24 px-6 bg-background" {...fadeInUp}>
        <div className="w-full md:max-w-[75%] mx-auto space-y-16">
          {/* Section label + filter inline */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary whitespace-nowrap">
                All Posts
              </span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className="rounded-full h-8 px-4 text-xs font-bold"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Post list */}
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No posts in this category yet.
            </p>
          ) : (
            <div className="flex flex-col">
              {filtered.map((blog, i) => (
                <Link
                  key={blog.key}
                  href={`/blog/${blog.slug}`}
                  className={`group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 ${
                    i !== filtered.length - 1 ? "border-b border-border/40" : ""
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-36 aspect-[16/10] md:aspect-square rounded-xl overflow-hidden flex-shrink-0 border border-border/40">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        {blog.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold leading-snug text-balance">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <Avatar className="h-6 w-6 border border-border/50 flex-shrink-0">
                        <AvatarImage src={blog.authorImage} alt={blog.author} />
                        <AvatarFallback className="text-[10px] font-bold">
                          {blog.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-semibold text-foreground/60">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="h-5 w-5 text-muted-foreground/30 hidden md:block flex-shrink-0" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
