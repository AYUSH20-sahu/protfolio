MASTER PROMPT — AI Developer Portfolio Website
You are a Senior Staff Software Engineer, Award-Winning UI/UX Designer, Product Designer, and AI Engineer.

Your task is to build a production-ready personal portfolio that looks better than 99% of developer portfolios on the internet.

The portfolio should look like something built by Apple, Stripe, Vercel, Linear, Framer, and Awwwards.

This is NOT a template portfolio.

Everything should be custom designed.

The website should immediately convince recruiters that I am an AI Engineer + Full Stack Developer capable of building production software.

====================================================
TECH STACK
====================================================

Frontend

Next.js 15
React 19
TypeScript
Tailwind CSS
Shadcn UI
Framer Motion
GSAP
Lenis Smooth Scroll
Three.js
React Three Fiber

Backend

Node.js
Express.js

Database

None required initially

Deployment

Frontend → Vercel

Backend → Render

====================================================
DESIGN STYLE
====================================================

Premium

Minimal

Dark Theme

Glassmorphism

Soft Glow

Gradient Lighting

Animated Background

Smooth Scroll

Micro interactions

Apple inspired

Stripe inspired

Linear inspired

Modern SaaS feel

Every section should animate while scrolling.

No boring cards.

No template layouts.

====================================================
LANDING PAGE
====================================================

Full screen hero

Animated background

Interactive particles

3D floating objects

Typing animation

Profile image

Name

Role

Buttons

Hire Me

Download Resume

View Projects

Github

LinkedIn

====================================================
ABOUT
====================================================

Timeline

Skills

Journey

Experience

Education

Achievements

Animated statistics

====================================================
TECH STACK
====================================================

Show every technology using animated icons

React

Next

Node

Express

MongoDB

SQL

TypeScript

JavaScript

Python

Gemini

Git

Github

JWT

REST APIs

Tailwind

Vercel

Render

Each icon should glow on hover.

====================================================
PROJECTS
====================================================

Beautiful project showcase

Each project opens a detailed modal.

Include

Overview

Problem

Solution

Architecture

Tech Stack

Challenges

Features

Gallery

Live Demo

Github

Case Study

Projects

AI Stock Screener

AI Trip Planner

NxtBuild

Parking Management

Future projects

Each project card should have beautiful hover animations.

====================================================
GITHUB INTEGRATION
====================================================

Connect directly to GitHub API.

Automatically fetch

Repositories

Stars

Forks

Languages

Commit history

Contribution graph

Pinned repositories

Profile information

Followers

Following

Latest commits

Display everything beautifully.

No manual updates.

====================================================
LEETCODE
====================================================

Automatically fetch

Solved problems

Easy

Medium

Hard

Contest Rating

Badges

Recent submissions

====================================================
BLOG
====================================================

Markdown support

Syntax highlighting

Search

Categories

Tags

Reading time

====================================================
CERTIFICATES
====================================================

Beautiful certificate gallery

Modal Preview

Download option

====================================================
CONTACT
====================================================

Working contact form

EmailJS

Social links

Resume download

Location

Availability

====================================================
ANIMATIONS
====================================================

GSAP

Framer Motion

Scroll Reveal

Parallax

Magnetic Buttons

Animated Cursor

Smooth transitions

Page transitions

Hover animations

Loading screen

====================================================
SEO
====================================================

100 Lighthouse SEO

Dynamic metadata

OpenGraph

Twitter cards

Schema.org

Sitemap

Robots.txt

RSS

====================================================
PERFORMANCE
====================================================

100 Lighthouse

Image optimization

Code splitting

Lazy loading

Dynamic imports

Server Components

ISR

SSR

Caching

====================================================
ACCESSIBILITY
====================================================

WCAG

Keyboard navigation

Screen reader support

Semantic HTML

====================================================
RESPONSIVE
====================================================

Mobile

Tablet

Desktop

Ultra wide

====================================================
EXTRA
====================================================

Command Palette (Ctrl + K)

Theme Switcher

Visitor Counter

Analytics

Project Search

Keyboard Shortcuts

Easter Egg

Spotify Integration

Now Playing

GitHub Heatmap

Mouse Glow

Animated Background

Custom Cursor

Floating Dock

Scroll Progress

====================================================
CODE QUALITY
====================================================

Clean Architecture

Reusable Components

Hooks

Types

Error Boundaries

Loading States

Skeleton UI

Reusable API layer

Folder structure

Best Practices

Production Ready

====================================================
Second Prompt (GitHub Integration)
Integrate my GitHub profile dynamically.

GitHub Username:
AYUSH20-sahu

Do NOT hardcode repositories.

Use the GitHub REST API or GraphQL API.

Automatically fetch:

- Avatar
- Bio
- Followers
- Following
- Public Repositories
- Stars
- Languages
- Latest Repositories
- Pinned Repositories
- Recent Activity
- Commit History
- Contribution Graph
- Repository Topics
- Repository Description

Each repository should have:

Live Demo Button

GitHub Button

Language Badge

Stars

Forks

Last Updated

README Preview

Repository Statistics

Search and Filter functionality.

Everything should update automatically whenever I push a new repository.
Third Prompt (Resume Integration)
Read my resume and automatically generate every section.

Extract

Summary

Projects

Skills

Education

Certificates

Experience

Achievements

Social Links

Generate beautiful cards for each project.

Each project should have:

Problem

Solution

Architecture

Features

Tech Stack

Challenges

Future Improvements

Demo

GitHub

Everything should be editable through JSON.
Fourth Prompt (AI Chatbot)
Create an AI assistant inside my portfolio.

Visitors should be able to ask:

Who is Ayush?

Show his projects.

What technologies does he know?

Explain AI Stock Screener.

Explain AI Trip Planner.

Explain NxtBuild.

Download Resume.

Contact Ayush.

The chatbot should answer using my portfolio data instead of hallucinating.
Additional features I'd add today

Since you've completed the AI Stock Screener, I'd also include:

GitHub Contribution Calendar that updates automatically.
GitHub commit activity graph.
Coding stats dashboard (GitHub + LeetCode if available).
Project timeline showing when each project was built.
Interactive terminal where visitors can type commands like help, projects, skills, resume, and contact.
Admin panel to edit portfolio content without touching code.
Markdown-based project pages so adding new projects is as simple as creating a new .md file.
Performance target: Lighthouse 95+ across Performance, Accessibility, Best Practices, and SEO.

This portfolio would complement your resume by showcasing your AI and full-stack work dynamically, while keeping your GitHub projects automatically synchronized.

Here’s the full milestone breakdown I’d use from your prompt, ordered so we can build it safely and verify each layer before moving on.

1. Project foundation
- Scaffold Next.js 15, React 19, TypeScript, Tailwind, and base app structure
- Set up global styles, theme tokens, layout, metadata, and folder organization
- Prepare reusable utility structure for future sections

2. Visual system and motion base
- Build the premium dark design language
- Add gradients, glassmorphism, glow effects, cards, buttons, and section styling
- Add motion primitives for scroll reveal, hover states, page transitions, and loading states

3. Hero / landing section
- Full-screen hero with name, role, CTA buttons, and profile image
- Animated background, particles, floating objects, typing effect, and scroll cue
- Quick-access links for GitHub, LinkedIn, resume, and hire/contact actions

4. About / story section
- Timeline, journey, experience, education, and achievements
- Animated stats and polished “who I am” storytelling
- Make it feel recruiter-friendly and product-focused

5. Tech stack section
- Animated showcase of every technology
- Hover glow icons for React, Next, Node, Express, MongoDB, SQL, TypeScript, JavaScript, Python, Gemini, Git, GitHub, JWT, REST APIs, Tailwind, Vercel, Render
- Responsive grid / marquee / icon wall treatment

6. Projects system
- Build project cards for AI Stock Screener, AI Trip Planner, NxtBuild, Parking Management, and future projects
- Add hover animations, filters, and project search
- Keep project data structured and reusable

7. Project detail modals / case studies
- Expand each project into a detailed modal or page
- Include overview, problem, solution, architecture, tech stack, challenges, features, gallery, live demo, GitHub, and case study
- Make project storytelling strong and visual

8. GitHub integration
- Connect to GitHub API
- Fetch profile info, repos, stars, forks, languages, topics, descriptions, latest commits, activity, followers, following, pinned repos, and contribution data
- Auto-update content when repositories change

9. Resume-driven content system
- Parse resume information into structured site sections
- Generate summary, skills, projects, education, certificates, experience, achievements, and social links
- Keep it editable through JSON or content files

10. LeetCode / coding stats section
- Show solved problems, difficulty breakdown, rating, badges, recent submissions
- Combine with GitHub stats for a stronger engineering profile

11. Blog system
- Markdown-based blog with syntax highlighting
- Search, categories, tags, reading time, and article pages
- Set it up so new posts are easy to add

12. Certificates gallery
- Beautiful certificate grid
- Modal preview and download actions
- Keep it polished and easy to browse

13. Contact system
- Working contact form with EmailJS or equivalent
- Social links, location, availability, resume download
- Validation, success/error states, and accessibility

14. SEO and discoverability
- Dynamic metadata, OpenGraph, Twitter cards
- Schema.org, sitemap, robots.txt, RSS
- Clean semantics for search visibility

15. Performance and accessibility
- Image optimization, code splitting, lazy loading, caching, SSR/ISR where useful
- WCAG-friendly structure, keyboard navigation, screen reader support
- Aim for Lighthouse 95+ across performance, accessibility, best practices, and SEO

16. Advanced interaction layer
- Command palette
- Theme switcher
- Scroll progress
- Custom cursor / mouse glow
- Magnetic buttons
- Floating dock
- Easter egg
- Smooth transitions

17. AI chatbot
- Portfolio-aware assistant that answers from your site data
- Support questions like who you are, your projects, technologies, resume, and contact info
- Prevent hallucinations by grounding it in portfolio content

18. Dashboard-style extras
- Visitor counter
- Analytics
- GitHub heatmap
- Commit activity graph
- Coding stats dashboard
- Spotify / now playing if you want it

19. Admin and content editing layer
- Admin panel or content config system
- Easy updates without touching code
- JSON/Markdown-driven content management

20. Final polish and deployment readiness
- Responsive QA for mobile, tablet, desktop, and ultrawide
- Cross-browser polish, animation tuning, and loading states
- Deploy frontend to Vercel and prepare backend if needed for Render
