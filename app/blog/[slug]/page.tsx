import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  content: string;
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
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
    content: `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
<br />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
`,
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <main className="container mx-auto py-12 md:py-20">
      <article className="prose lg:prose-xl mx-auto">
        <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden mb-8">
          <Image
            src={blog.image || "/placeholder.svg"}
            alt={`${blog.title} blog post image`}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center space-x-3 mb-8">
          <Avatar>
            <AvatarImage
              src={blog.authorImage || "/placeholder.svg"}
              alt={blog.author}
            />
            <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{blog.author}</p>
            <p className="text-muted-foreground text-sm">{blog.date}</p>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <div className="mt-12">
          <Link href="/blog" className="text-primary hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
