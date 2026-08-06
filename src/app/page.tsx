import { SectionHeading } from "@/components/section-heading";
import { GitHubShowcase } from "@/components/github-showcase";
import { ProjectShowcase } from "@/components/project-showcase";
import {
  heroFacts,
  highlights,
  journey,
  metrics,
  technologies
} from "@/data/portfolio";
import { projects } from "@/data/projects";
import {
  resumeCertificates,
  resumeEducation,
  resumeExperience,
  resumeSkills,
  resumeSummary,
  socialLinks
} from "@/data/resume";
import { getGitHubStats } from "@/lib/github";
import { BlogList } from "@/components/blog-list";
import { getAllPosts } from "@/lib/blog";
import { ContactForm } from "@/components/contact-form";
import { PortfolioAssistant } from "@/components/portfolio-assistant";
import { VisitorCounter } from "@/components/visitor-counter";

export const revalidate = 3600;

export default async function Home() {
  const [githubStats, blogPosts] = await Promise.all([
    getGitHubStats(),
    getAllPosts()
  ]);

  return (
    <main id="content" className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-glow">
              AS
            </div>
            <div>
              <p className="text-sm text-slate-400">Ayush Sahu</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                AI Engineer Portfolio
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#github" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#assistant" className="transition hover:text-white">
              Assistant
            </a>
            <a href="#blog" className="transition hover:text-white">
              Blog
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative mx-auto min-h-[calc(100vh-73px)] max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(124,140,255,0.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(77,225,193,0.16),transparent_25%),radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="absolute inset-0 -z-20 bg-grid-fade bg-[size:88px_88px] opacity-15 [mask-image:linear-gradient(to_bottom,white,transparent_88%)]" />

        <div className="grid min-h-[calc(100vh-120px)] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)]" />
              Building milestone by milestone
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                AI Engineer + Full Stack Developer building premium, dynamic
                product experiences.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                This portfolio is being shaped to feel like a product, not a
                template. It will showcase engineering depth, polished UX, and
                live integrations that keep the content fresh automatically.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Hire Me
              </a>
              <a
                href="#stack"
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 backdrop-blur transition hover:border-cyan-200/40 hover:bg-cyan-300/15"
              >
                Explore Stack
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-300 backdrop-blur"
                >
                  {fact}
                </div>
              ))}
            </div>

            <VisitorCounter />
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-4 bottom-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-[#090d1d]/90 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Profile preview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      Ayush Sahu
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      AI engineer, full stack builder, and product-minded
                      developer.
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Available
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-400 to-fuchsia-400 opacity-40 blur-2xl" />
                    <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),rgba(255,255,255,0.04)_55%,rgba(255,255,255,0.02))] shadow-glow">
                      <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/10 bg-[#0b1024]">
                        <div className="text-center">
                          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                            Portfolio Avatar
                          </p>
                          <p className="mt-3 text-lg font-medium text-white">
                            Replace with photo
                          </p>
                          <p className="mt-2 text-sm text-slate-400">
                            Hero portrait space
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-3xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="About"
          title="A focused engineering story with product thinking at the center."
          description="This section is designed to tell recruiters why the work matters, not just what tools were used. The narrative will later be powered by resume content and dynamic data."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Journey
            </p>
            <div className="mt-6 space-y-5">
              {journey.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
                    <div className="mt-2 h-full w-px bg-white/10" />
                  </div>
                  <div className="pb-2">
                    <p className="text-sm text-cyan-200/80">{item.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Achievements
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Snapshot
              </p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                I am shaping this portfolio to demonstrate how I think:
                structured, intentional, and practical. The goal is to make the
                next milestone feel like a product release, not just a design
                update.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Tech Stack"
          title="An animated stack that shows the depth behind the work."
          description="This section will later use icons and animated states. For now it is already structured as a high-end technology wall with hover glow and readable hierarchy."
        />

        <div className="mt-10 rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="group rounded-2xl border border-white/10 bg-[#090d1d]/80 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">0{index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60 shadow-[0_0_16px_rgba(103,232,249,0.7)] transition group-hover:bg-cyan-200" />
                </div>
                <p className="mt-6 text-lg font-medium text-white transition group-hover:text-cyan-100">
                  {tech}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Core tool in the portfolio and product workflow.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Case-study style projects that speak like a real product portfolio."
          description="Each project is structured to explain the problem, the solution, the architecture, and the impact. This gives us a strong base before GitHub sync and live data arrive."
        />

        <ProjectShowcase projects={projects} />
      </section>

      <section id="github" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="GitHub"
          title="Live profile data that keeps the portfolio in sync with the repo."
          description="This section now pulls public GitHub profile and repository data directly from the API so new work can surface without manual updates."
        />

        <GitHubShowcase stats={githubStats} />
      </section>

      <section id="resume" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Resume"
          title="Structured resume content that can be expanded into the full site."
          description="This data layer is intentionally JSON-friendly so the portfolio can be generated from resume content without rewriting the page structure."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              {resumeSummary.title}
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              {resumeSummary.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {resumeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Experience
              </p>
              <div className="mt-5 space-y-4">
                {resumeExperience.map((item) => (
                  <div
                    key={`${item.role}-${item.company}`}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-medium text-white">
                        {item.role}
                      </h3>
                      <span className="text-sm text-slate-400">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-cyan-200/80">{item.company}</p>
                    <p className="mt-3 leading-7 text-slate-300">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Education
              </p>
              <div className="mt-5 space-y-4">
                {resumeEducation.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-medium text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm text-slate-400">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-cyan-200/80">{item.place}</p>
                    <p className="mt-3 leading-7 text-slate-300">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Certificates
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {resumeCertificates.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Social links
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
        <SectionHeading
          eyebrow="Blog"
          title="Markdown writing that can grow with the portfolio."
          description="Short build logs and technical notes give the site another layer of proof without needing a CMS yet."
        />
        <BlogList posts={blogPosts.slice(0, 2)} />
      </section>

      <section
        id="assistant"
        className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20"
      >
        <SectionHeading
          eyebrow="Assistant"
          title="A grounded portfolio assistant that only answers from portfolio data."
          description="Instead of a generic chatbot, this one is wired to the site’s current content so it can explain projects, skills, resume details, and contact options without guessing."
        />

        <div className="mt-10">
          <PortfolioAssistant />
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-12 pb-20 md:px-10 md:py-20"
      >
        <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                Next milestone
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                The portfolio foundation is complete.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Milestones 1 through 6 are now in place: premium layout,
                projects, live GitHub data, resume-driven content, blog, contact
                flow, SEO, and an assistant grounded in portfolio content.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
              Contact details
            </p>
            <div className="mt-5 space-y-4 text-slate-300">
              <p>
                Open to AI engineering, full stack, and product-focused opportunities.
              </p>
              <a
                href="mailto:ayush@example.com"
                className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                ayush@example.com
              </a>
              <a
                href="https://github.com/AYUSH20-sahu"
                className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                GitHub profile
              </a>
              <a
                href="#resume"
                className="block rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                Resume overview
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
