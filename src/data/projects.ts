export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  features: string[];
  techStack: string[];
  gallery: string[];
  liveDemo: string;
  github: string;
  caseStudy: string;
};

export const projects: Project[] = [
  {
    slug: "ai-stock-screener",
    title: "AI Stock Screener",
    subtitle: "Intelligent market discovery with signal-driven analysis",
    year: "2026",
    category: "AI Product",
    summary:
      "A decision-support tool that helps users identify interesting stock opportunities through a clean, data-first experience.",
    problem:
      "Investors often waste time switching between charts, news, and filters before forming a useful shortlist.",
    solution:
      "I designed a focused screener that blends AI-assisted insights, filtering, and summary cards into one workflow.",
    architecture:
      "The app is structured around reusable data panels, API-ready insight modules, and modular result views for future live market data.",
    challenges:
      "Balancing dense financial information with a calm interface while keeping the UX readable on smaller screens.",
    features: [
      "Smart watchlist-style discovery",
      "Signal cards with concise reasoning",
      "Clean filters and comparison views",
      "Expandable detail panels"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI APIs"],
    gallery: ["Signal overview", "Detail panel", "Mobile preview"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#"
  },
  {
    slug: "ai-trip-planner",
    title: "AI Trip Planner",
    subtitle: "A travel planning assistant built around practical itinerary creation",
    year: "2026",
    category: "AI Assistant",
    summary:
      "A travel planning flow that turns rough ideas into structured itineraries, recommendations, and timelines.",
    problem:
      "Trip planning usually lives across notes, maps, flight tabs, and message threads, which makes decisions messy.",
    solution:
      "I shaped a guided workflow that helps a visitor move from destination ideas to a usable itinerary quickly.",
    architecture:
      "Built as a content-first planner with reusable destination cards, day-by-day containers, and prompt-ready assistant slots.",
    challenges:
      "Keeping the interface aspirational without hiding the practical details people need before traveling.",
    features: [
      "Destination shortlisting",
      "Day-by-day itinerary layout",
      "Budget and route awareness",
      "Travel notes and saved plans"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "AI APIs"],
    gallery: ["Trip overview", "Timeline view", "Mobile itinerary"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#"
  },
  {
    slug: "nxtbuild",
    title: "NxtBuild",
    subtitle: "A product and developer workflow platform concept",
    year: "2025",
    category: "SaaS",
    summary:
      "A polished product concept that presents a modern workflow for planning, building, and shipping digital products.",
    problem:
      "Founders and developers often jump between planning docs, design files, and engineering tasks without one narrative system.",
    solution:
      "I created a premium SaaS-style experience that makes the workflow feel coherent, trackable, and visually confident.",
    architecture:
      "Designed as a modular platform shell with dashboard blocks, content modules, and room for future authenticated features.",
    challenges:
      "Making the concept feel credible and enterprise-ready without overloading the page with noisy metrics.",
    features: [
      "Workflow dashboard",
      "Planning modules",
      "Shipping-oriented summaries",
      "Composable layout blocks"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    gallery: ["Dashboard", "Planning board", "Release panel"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#"
  },
  {
    slug: "parking-management",
    title: "Parking Management",
    subtitle: "A structured operations app for managing vehicle flow",
    year: "2025",
    category: "Operations",
    summary:
      "A management dashboard concept for controlling slots, entries, exits, and occupancy in a parking workflow.",
    problem:
      "Operational tools often fail because they hide the most important state behind cluttered forms and weak hierarchy.",
    solution:
      "I approached it as a real-world dashboard with strong status visibility, quick actions, and a clear data grid feel.",
    architecture:
      "The structure supports slot management, event logging, and future admin workflows without redesigning the core layout.",
    challenges:
      "Keeping the admin-style interface polished so it still feels premium and product-like instead of purely utilitarian.",
    features: [
      "Slot status board",
      "Entry and exit tracking",
      "Occupancy overview",
      "Admin-focused controls"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    gallery: ["Occupancy board", "Slot list", "Operations view"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#"
  },
  {
    slug: "future-projects",
    title: "Future Projects",
    subtitle: "A living section for what ships next",
    year: "Ongoing",
    category: "Roadmap",
    summary:
      "A dedicated slot for projects that will be pulled in dynamically as the portfolio evolves.",
    problem:
      "Static portfolio sites age quickly when new work ships but the website never updates.",
    solution:
      "This slot will later be replaced by live project data and automatically updated case studies.",
    architecture:
      "Built to remain open-ended so GitHub and CMS-like content can flow in without restructuring the site.",
    challenges:
      "Designing a forward-looking section that feels intentional now, even before the live integrations arrive.",
    features: [
      "Auto-updating placeholder",
      "Dynamic content readiness",
      "Future case study support",
      "Expandable visual system"
    ],
    techStack: ["Next.js", "TypeScript", "GitHub API", "Content Files"],
    gallery: ["Roadmap card", "Future case study", "Integration slot"],
    liveDemo: "#",
    github: "#",
    caseStudy: "#"
  }
];
