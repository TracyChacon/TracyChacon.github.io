import ProjectCard, { ProjectCardProps } from "@/app/components/ProjectCard";

const PROJECTS: ProjectCardProps[] = [
  {
    badge: "Local Sandbox UI",
    title: "Project Dashboard Sandbox",
    description: "Interactive interface mockups for clearance scoping and workflow tracking. Switch permissions dynamically from standard Loan Officers down to Risk Agents.",
    visualLabelLeft: "STAGES IN WORKFLOW",
    visualLabelRight: "LEADS ROUTED",
    visualCodeSnippet: "[Lead] → [App Check] → [Underwriting]",
    visualStatusText: "Active Validation",
    tags: ["Next.js 15", "Tailwind CSS v4", "HTML5 DnD"],
    ctaLabel: "Launch UI Component Sandbox →",
    ctaHref: "/scheduler-dashboard",
    isExternal: false,
  },
  {
    badge: "Live Microservice",
    title: "Circto Scheduler Engine",
    description: "Production high-concurrency booking engine service powering task allocation and atomic database lock execution in real-time.",
    visualLabelLeft: "CONCURRENCY LOCK",
    visualLabelRight: "SERVICE STATUS",
    visualCodeSnippet: "[Input] → [Atomic DB Lock] → [Commit]",
    visualStatusText: "Live Service Online",
    tags: ["Next.js App Router", "PostgreSQL", "Docker"],
    ctaLabel: "Launch Live Circto Engine →",
    ctaHref: "https://circto-scheduler-igwi-one.vercel.app/",
    isExternal: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 border-t border-gray-300">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-bold uppercase text-indigo-600 tracking-widest block text-center md:text-left mb-2">
          Featured Case Study & Ecosystem
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 text-center md:text-left mb-12">
          Multi-Tenant Scheduler & Data Pipeline
        </h2>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}