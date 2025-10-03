'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
    image: "/blog/post-one.jpg",
    title: "The Future of FinTech in Africa",
    description:
      "Exploring the trends and technologies shaping the future of financial services across the continent.",
    author: "John Doe",
    authorImage: "/avatars/john-doe.jpg",
    date: "Oct 1, 2025",
    category: "FinTech",
  },
  {
    key: "blog-2",
    slug: "agritech-a-revolution-in-farming",
    image: "/blog/post-two.jpg",
    title: "AgriTech: A Revolution in Farming",
    description:
      "How technology is transforming agriculture, from precision farming to supply chain optimization.",
    author: "Jane Smith",
    authorImage: "/avatars/jane-smith.jpg",
    date: "Sep 25, 2025",
    category: "AgriTech",
  },
  {
    key: "blog-3",
    slug: "the-power-of-custom-software",
    image: "/blog/post-three.jpg",
    title: "The Power of Custom Software",
    description:
      "Why off-the-shelf solutions may not be the best fit for your business and how custom software can help.",
    author: "Peter Jones",
    authorImage: "/avatars/peter-jones.jpg",
    date: "Sep 15, 2025",
    category: "Software Development",
  },
  {
    key: "blog-4",
    slug: "cloud-computing-in-africa",
    image: "/blog/post-four.jpg",
    title: "Cloud Computing in Africa",
    description:
      "The rise of cloud computing in Africa and its impact on businesses.",
    author: "John Doe",
    authorImage: "/avatars/john-doe.jpg",
    date: "Aug 28, 2025",
    category: "Cloud",
  },
  {
    key: "blog-5",
    slug: "the-importance-of-ui-ux-design",
    image: "/blog/post-five.jpg",
    title: "The Importance of UI/UX Design",
    description:
      "How a good UI/UX design can improve user satisfaction and increase conversions.",
    author: "Jane Smith",
    authorImage: "/avatars/jane-smith.jpg",
    date: "Aug 15, 2025",
    category: "Design",
  },
  {
    key: "blog-6",
    slug: "data-analytics-for-business-growth",
    image: "/blog/post-six.jpg",
    title: "Data Analytics for Business Growth",
    description:
      "How to use data analytics to make informed decisions and drive business growth.",
    author: "Peter Jones",
    authorImage: "/avatars/peter-jones.jpg",
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

  const latestBlog = blogs.reduce((latest, current) => {
    return new Date(current.date) > new Date(latest.date) ? current : latest;
  });

  const filteredBlogs = blogs.filter(
    (blog) =>
      (filter === "All" || blog.category === filter) && blog.key !== latestBlog.key
  );

  return (
    <main className="container mx-auto py-12 md:py-20">
      <section className="bg-background text-center flex flex-col justify-center items-center px-8 pb-16">
        <h1 className="text-foreground text-5xl md:text-7xl font-bold leading-tight max-w-5xl text-balance">
          From the Blog
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-3xl text-pretty leading-relaxed">
          Insights, trends, and perspectives on the digital landscape in Africa. Stay updated with the latest in technology and innovation.
        </p>
      </section>

      {/* Latest Blog Spotlight */}
      <section className="bg-background text-foreground py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2">Latest Post</h2>
          <p className="text-muted-foreground text-lg mb-8">The latest article from our team of experts.</p>
          <Link href={`/blog/${latestBlog.slug}`}>
            <Card className="rounded-3xl p-0 hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="relative w-full h-64 md:h-96 aspect-square bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src={latestBlog.image || "/placeholder.svg"}
                  alt={`${latestBlog.title} blog post image`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <CardHeader className="px-0 pb-4">
                  <Badge className="mb-2">{latestBlog.category}</Badge>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                    {latestBlog.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {latestBlog.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="flex items-center space-x-3 mt-4">
                    <Avatar>
                      <AvatarImage
                        src={latestBlog.authorImage || "/placeholder.svg"}
                        alt={latestBlog.author}
                      />
                      <AvatarFallback>{latestBlog.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{latestBlog.author}</p>
                      <p className="text-muted-foreground text-sm">
                        {latestBlog.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      <section className="bg-background text-foreground py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2">Recent Blogs</h2>
          <p className="text-muted-foreground text-lg mb-8">Explore more articles from our team of experts.</p>
          <div className="flex justify-start flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.key} className="flex">
                <Card className="rounded-3xl p-0 hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden flex flex-col w-full">
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={`${blog.title} blog post image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="px-0 pb-4">
                      <Badge className="mb-2">{blog.category}</Badge>
                      <CardTitle className="text-xl font-bold mb-2">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {blog.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 pb-0 mt-auto">
                      <div className="flex items-center space-x-3 mt-4">
                        <Avatar>
                          <AvatarImage
                            src={blog.authorImage || "/placeholder.svg"}
                            alt={blog.author}
                          />
                          <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}