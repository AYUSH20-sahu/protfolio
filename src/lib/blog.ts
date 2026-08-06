import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  readingTime: string;
  content: string;
};

type RawPost = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
};

export async function getAllPosts() {
  const filenames = await fs.readdir(POSTS_DIRECTORY);

  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fullPath = path.join(POSTS_DIRECTORY, filename);
        const fileContents = await fs.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const frontMatter = data as RawPost;

        return {
          slug,
          title: frontMatter.title,
          date: frontMatter.date,
          category: frontMatter.category,
          tags: frontMatter.tags ?? [],
          excerpt: frontMatter.excerpt,
          readingTime: estimateReadingTime(content),
          content
        } satisfies BlogPost;
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontMatter = data as RawPost;
  const processedContent = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: frontMatter.title,
    date: frontMatter.date,
    category: frontMatter.category,
    tags: frontMatter.tags ?? [],
    excerpt: frontMatter.excerpt,
    readingTime: estimateReadingTime(content),
    content: processedContent.toString()
  } satisfies BlogPost;
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
