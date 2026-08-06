import { BlogList } from "@/components/blog-list";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog",
  description: "Markdown-based writing about portfolio engineering, AI UX, and product design."
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen px-6 py-12 md:px-10 md:py-20">
      <section className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="Notes, ideas, and build logs."
          description="A markdown-driven blog that can grow with the portfolio and support future search, categories, and tags."
        />
        <BlogList posts={posts} />
      </section>
    </main>
  );
}
