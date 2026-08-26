import Link from "next/link";

export interface ProjectCardProps {
  badge: string;
  title: string;
  description: string;
  visualLabelLeft: string;
  visualLabelRight: string;
  visualCodeSnippet: string;
  visualStatusText: string;
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
  isExternal?: boolean;
}

export default function ProjectCard({
  badge,
  title,
  description,
  visualLabelLeft,
  visualLabelRight,
  visualCodeSnippet,
  visualStatusText,
  tags,
  ctaLabel,
  ctaHref,
  isExternal = false,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-slate-200 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Top Window Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-mono text-slate-500">{badge}</span>
        </div>
        
        {/* Card Title & Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
        </div>

        {/* Micro Code/Visual Block */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-[10px]">
          <div className="flex justify-between text-slate-500 border-b border-slate-800 pb-1">
            <span>{visualLabelLeft}</span>
            <span>{visualLabelRight}</span>
          </div>
          <div className="flex items-center justify-between text-emerald-400">
            <span>{visualCodeSnippet}</span>
            <span className="bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              {visualStatusText}
            </span>
          </div>
        </div>
      </div>

      {/* Tags & Action Button */}
      <div className="pt-6">
        <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        {isExternal ? (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block py-3.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold text-xs rounded-xl tracking-wide uppercase transition-all shadow-md"
          >
            {ctaLabel}
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="w-full block py-3.5 px-4 bg-white hover:bg-slate-100 text-slate-950 text-center font-bold text-xs rounded-xl tracking-wide uppercase transition-all shadow-md"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}