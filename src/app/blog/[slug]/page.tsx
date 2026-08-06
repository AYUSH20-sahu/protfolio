import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt
    };
  } catch {
    return {
      title: "Blog Post"
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <main className="min-h-screen px-6 py-12 md:px-10 md:py-20">
        <article className="prose-like mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            {formatDate(post.date)} · {post.readingTime}
          </p>

          <p className="mt-6 text-lg text-slate-300">{post.excerpt}</p>

          <div
            className="mt-10 space-y-6 text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}
