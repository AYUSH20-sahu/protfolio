import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
        >
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            {post.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{post.title}</h3>
          <p className="mt-2 text-sm text-cyan-200/80">
            {formatDate(post.date)} · {post.readingTime}
          </p>
          <p className="mt-4 leading-7 text-slate-300">{post.excerpt}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
          >
            Read post
          </Link>
        </article>
      ))}
    </div>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}
