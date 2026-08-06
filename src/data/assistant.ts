import { heroFacts, highlights, technologies } from "@/data/portfolio";
import { projects } from "@/data/projects";
import {
  resumeCertificates,
  resumeEducation,
  resumeExperience,
  resumeSkills,
  socialLinks
} from "@/data/resume";

export type AssistantAnswer = {
  title: string;
  body: string;
  bullets?: string[];
  links?: Array<{ label: string; href: string }>;
};

const projectMap = new Map(projects.map((project) => [project.slug, project]));

export const assistantSuggestions = [
  "Who is Ayush?",
  "Show his projects",
  "What technologies does he know?",
  "Explain AI Stock Screener",
  "Explain AI Trip Planner",
  "Explain NxtBuild",
  "Download Resume",
  "Contact Ayush"
];

export const assistantCommands = [
  { label: "Go to Hero", href: "#content" },
  { label: "Open Projects", href: "#projects" },
  { label: "GitHub Stats", href: "#github" },
  { label: "Read Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export function answerPortfolioQuestion(input: string): AssistantAnswer {
  const query = input.trim().toLowerCase();

  if (!query) {
    return {
      title: "Ask me anything",
      body:
        "Try questions about Ayush, his projects, skills, resume, or how to contact him."
    };
  }

  if (matches(query, ["who is ayush", "about ayush", "who are you"])) {
    return {
      title: "Who is Ayush?",
      body:
        "Ayush Sahu is presented here as an AI engineer and full stack developer with a product-first mindset. The portfolio emphasizes dynamic content, premium UI, and practical engineering depth.",
      bullets: heroFacts
    };
  }

  if (matches(query, ["show his projects", "projects", "what has he built"])) {
    return {
      title: "Projects",
      body:
        "The portfolio currently highlights five project stories, with detailed case studies ready to expand as integrations come online.",
      bullets: projects.map((project) => `${project.title} - ${project.subtitle}`)
    };
  }

  if (matches(query, ["technologies", "tech stack", "what technologies does he know"])) {
    return {
      title: "Technologies",
      body:
        "The site currently lists a broad stack across frontend, backend, AI, and deployment tooling.",
      bullets: technologies
    };
  }

  if (matches(query, ["ai stock screener"])) {
    const project = projectMap.get("ai-stock-screener");
    return projectAnswer(project?.title ?? "AI Stock Screener", project);
  }

  if (matches(query, ["ai trip planner"])) {
    const project = projectMap.get("ai-trip-planner");
    return projectAnswer(project?.title ?? "AI Trip Planner", project);
  }

  if (matches(query, ["nxtbuild"])) {
    const project = projectMap.get("nxtbuild");
    return projectAnswer(project?.title ?? "NxtBuild", project);
  }

  if (matches(query, ["download resume", "resume"])) {
    return {
      title: "Resume",
      body:
        "The resume content is structured in the site so it can be turned into editable JSON later. Right now it includes skills, experience, education, certificates, and social links.",
      bullets: [...resumeSkills, ...resumeCertificates],
      links: socialLinks
    };
  }

  if (matches(query, ["contact ayush", "contact", "hire"])) {
    return {
      title: "Contact",
      body:
        "Use the contact form below, or reach out directly through the links already wired into the portfolio.",
      links: [
        { label: "Contact section", href: "#contact" },
        ...socialLinks
      ]
    };
  }

  if (matches(query, ["experience", "education", "certificates"])) {
    return {
      title: "Background",
      body:
        "The resume section is intentionally lightweight but structured, so it can expand into the full professional profile later.",
      bullets: [
        ...resumeExperience.map((item) => `${item.role} - ${item.company}`),
        ...resumeEducation.map((item) => `${item.title} - ${item.place}`),
        ...resumeCertificates
      ]
    };
  }

  if (matches(query, ["github", "repo", "repositories"])) {
    return {
      title: "GitHub",
      body:
        "The GitHub section reads live public data and updates on revalidation, so new repositories and profile changes can surface automatically.",
      links: [{ label: "GitHub stats", href: "#github" }]
    };
  }

  return {
    title: "I’m grounding this in portfolio data",
    body:
      "I didn’t find an exact match, but I can answer about Ayush, his projects, technologies, GitHub data, resume, or contact options."
  };
}

function projectAnswer(title: string, project: ReturnType<typeof projectMap.get>) {
  if (!project) {
    return {
      title,
      body: "That project is not available in the current portfolio dataset."
    };
  }

  return {
    title,
    body: project.summary,
    bullets: [
      `Problem: ${project.problem}`,
      `Solution: ${project.solution}`,
      `Architecture: ${project.architecture}`,
      `Challenges: ${project.challenges}`
    ]
  };
}

function matches(query: string, phrases: string[]) {
  return phrases.some((phrase) => query.includes(phrase));
}
