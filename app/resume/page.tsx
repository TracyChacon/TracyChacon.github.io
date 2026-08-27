import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Tracy Chacon - Resume',
  description: 'Full-Stack Software Engineer Resume and Professional History.',
};

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 bg-white text-[#24292e]">
      
      {/* Top Action Bar */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-200">
        <Link href="/" className="text-sky-600 font-medium hover:underline text-sm">
          &larr; Back to Portfolio
        </Link>
        <a 
          href="/resume/Tracy_Chacon_Resume.pdf" 
          download="Tracy_Chacon_Resume.pdf"
          className="bg-[#1e3a8a] hover:bg-blue-950 text-white px-4 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm"
        >
          Download PDF Version
        </a>
      </div>

      {/* --- PAGE 1: RESUME CONTENT --- */}
      <div className="space-y-6">

        {/* Header Layout */}
        <header className="flex items-center justify-between gap-5 border-b-[2.5px] border-[#1e3a8a] pb-3 mb-4">
          <div className="grow text-left">
            <Link href="https://tracychacon.github.io" className="no-underline">
              <h1 className="text-2xl font-extrabold tracking-wide text-[#1e3a8a] mb-0.5">TRACY CHACON</h1>
            </Link>
            <div className="text-sm font-semibold text-[#0284c7] mb-1">Full-Stack Software Engineer</div>
            <div className="text-xs text-[#475569]">
              San Antonio, TX &bull;{' '}
              <a href="https://tracychacon.github.io" className="text-[#0284c7] hover:underline font-medium">tracychacon.github.io</a> &bull;{' '}
              <a href="https://github.com/tracychacon" className="text-[#0284c7] hover:underline font-medium">github.com/tracychacon</a> &bull;{' '}
              <a href="https://www.linkedin.com/in/tracy-chacon-862a5699/" className="text-[#0284c7] hover:underline font-medium">linkedin.com/in/tracychacon</a>
            </div>
          </div>
          <div className="flex-shrink-0 w-[75px] h-[75px] rounded-full border-[3px] border-[#1e3a8a] overflow-hidden bg-[#f1f5f9] relative flex items-center justify-center">
            <a href="https://tracychacon.github.io" className="w-full h-full block relative">
              <Image 
                src="/resume/portrait.jpeg" 
                alt="Tracy Chacon Portrait" 
                fill
                className="object-cover"
              />
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] border-b-[1.5px] border-[#93c5fd] pb-0.5 mb-2 mt-4">
            Professional Summary
          </h2>
          <p className="text-xs text-[#334155] leading-relaxed text-justify mb-2">
            Adaptable Software Engineer and Operations Specialist with hands-on experience engineering full-stack web applications, modern backend APIs, and reproducible development environments. Combines technical proficiency in React, Next.js, TypeScript, Node.js, Ruby on Rails, and Docker to build performant, reliable, and scalable software solutions.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] border-b-[1.5px] border-[#93c5fd] pb-0.5 mb-2 mt-4">
            Technical Skills
          </h2>
          <div className="grid grid-cols-[140px_1fr] gap-y-1 text-xs">
            <div className="font-bold text-[#1e3a8a]">Languages:</div>
            <div className="text-[#334155]">TypeScript, JavaScript (ES6+), C#, Ruby, SQL (PostgreSQL), HTML5, CSS3/Tailwind</div>
            <div className="font-bold text-[#1e3a8a]">Frameworks & Tools:</div>
            <div className="text-[#334155]">React, Next.js, Node.js, Ruby on Rails, RESTful APIs, Git, Docker, Docker Compose</div>
            <div className="font-bold text-[#1e3a8a]">Architecture & Systems:</div>
            <div className="text-[#334155]">Relational Database Design, Query Optimization, Linux/Ubuntu Environments, Shell Automation</div>
          </div>
        </section>

        {/* Software Engineering & Development Projects */}
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] border-b-[1.5px] border-[#93c5fd] pb-0.5 mb-2 mt-4">
            Software Engineering & Development Projects
          </h2>
          
          <div className="mb-3">
            <div className="flex justify-between font-bold text-[#0f172a] text-xs mb-0.5">
              <span>Project Dashboard Sandbox [Next.js, TypeScript, React, PostgreSQL]</span>
            </div>
            <ul className="list-disc ml-4 text-xs text-[#334155] space-y-0.5">
              <li>Architected interactive interface mockups for clearance scoping and workflow tracking, enabling dynamic permission shifting from standard Loan Officers down to Risk Agents.</li>
              <li>Implemented modular component structures utilizing Next.js App Router and Server Actions for optimized state responsiveness.</li>
              <li>Configured connection pooling and relational database schemas to maintain secure state across session boundaries.</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-[#0f172a] text-xs mb-0.5">
              <span>circto-scheduler [Next.js, Node.js, Docker, PostgreSQL]</span>
            </div>
            <ul className="list-disc ml-4 text-xs text-[#334155] space-y-0.5">
              <li>Engineered a self-hosted appointment scheduling platform featuring custom memory-locking mechanisms to manage concurrent reservation requests without race conditions.</li>
              <li>Containerized the complete application stack using Docker Compose and integrated native PostgreSQL database drivers for predictable local and production deployments.</li>
              <li>Designed atomic concurrency lock keys and custom migration scripts to guarantee absolute consistency across client booking slots.</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-[#0f172a] text-xs mb-0.5">
              <span>Personal Portfolio & Web Architecture Migration [Next.js, TypeScript, React, GitHub Pages]</span>
            </div>
            <ul className="list-disc ml-4 text-xs text-[#334155] space-y-0.5">
              <li>Migrated static landing page infrastructure into a modular Next.js static site generator optimized for automated GitHub Pages deployment pipelines.</li>
              <li>Enhanced performance, web accessibility, and responsive rendering across various mobile and desktop viewport specifications.</li>
              <li>Integrated clean custom styling layouts and asset structures to maintain lightweight client bundle footprints.</li>
            </ul>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] border-b-[1.5px] border-[#93c5fd] pb-0.5 mb-2 mt-4">
            Work Experience
          </h2>
          
          <div className="mb-3">
            <div className="flex justify-between text-xs font-bold text-[#0f172a]">
              <span>Private Family Caregiver</span>
              <span className="text-[#0284c7] font-semibold">San Antonio, TX | Aug 2024 &ndash; Present</span>
            </div>
            <ul className="list-disc ml-4 text-xs text-[#334155] mt-0.5">
              <li>Manage complex medical schedules, diet planning, and health metrics coordination with medical professionals to ensure absolute continuity of care.</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs font-bold text-[#0f172a]">
              <span>Rideshare Driver / Small Business Logistics Partner &mdash; Uber</span>
              <span className="text-[#0284c7] font-semibold">San Antonio, TX | Aug 2021 &ndash; Present</span>
            </div>
            <ul className="list-disc ml-4 text-xs text-[#334155] mt-0.5">
              <li><strong>Customer Experience & Optimization:</strong> Deliver tailored communication to diverse clientele while managing business schedules, vehicle diagnostics, and preventative maintenance.</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs font-bold text-[#0f172a]">
              <span>Residential Mortgage Loan Officer</span>
              <span className="text-[#0284c7] font-semibold">San Antonio, TX | Prior Experience</span>
            </div>
            <p className="text-xs text-[#334155] mt-0.5">Guided clients through complex loan structures, financial documentation, and strict regulatory compliance requirements.</p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs font-bold text-[#0f172a]">
              <span>Electrician</span>
              <span className="text-[#0284c7] font-semibold">San Antonio, TX | Prior Experience</span>
            </div>
            <p className="text-xs text-[#334155] mt-0.5">Installed, inspected, and maintained critical electrical infrastructure according to regional engineering codes and safety standards.</p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between text-xs font-bold text-[#0f172a]">
              <span>Military Police Officer &mdash; U.S. Armed Forces</span>
              <span className="text-[#0284c7] font-semibold">Prior Experience</span>
            </div>
            <p className="text-xs text-[#334155] mt-0.5">Executed physical security measures, risk assessment protocols, and law enforcement operations in high-stress, high-consequence environments.</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] border-b-[1.5px] border-[#93c5fd] pb-0.5 mb-2 mt-4">
            Certifications
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 list-none text-xs text-[#334155] pl-0">
            <li className="before:content-['•_'] before:text-[#0284c7] before:font-bold">Responsive Web Design Certification &ndash; freeCodeCamp</li>
            <li className="before:content-['•_'] before:text-[#0284c7] before:font-bold">Foundational C# with Microsoft Certification &ndash; freeCodeCamp / Microsoft</li>
            <li className="before:content-['•_'] before:text-[#0284c7] before:font-bold">JavaScript Algorithms and Data Structures V8 Certification &ndash; freeCodeCamp</li>
            <li className="before:content-['•_'] before:text-[#0284c7] before:font-bold">Relational Database V8 Certification &ndash; freeCodeCamp</li>
            <li className="before:content-['•_'] before:text-[#0284c7] before:font-bold">Back-End Development and APIs V8 Certification &ndash; freeCodeCamp</li>
          </ul>
        </section>
      </div>

      {/* --- PAGE 2: QR CODES AND LABELS SECTION --- */}
      <div className="mt-12 pt-8 border-t-2 border-slate-200">
        <div className="text-sm font-extrabold text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-2 mb-6 uppercase tracking-wider">
          Portfolio & Project Quick-Access QR Codes
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start justify-items-center pt-2">
            
          {/* QR 1: Appointment Scheduler (circto-scheduler) */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://circto-scheduler-igwi-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/scheduler_qr.png" 
                        alt="Appointment Scheduler QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://circto-scheduler-igwi-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    Appointment Scheduler (circto)
                  </a>
              </div>
          </div>

          {/* QR 2: Project Dashboard Sandbox */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://tracychacon.github.io/scheduler-dashboard" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/dashboard_qr.png" 
                        alt="Project Dashboard Sandbox QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://tracychacon.github.io/scheduler-dashboard" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    Project Dashboard Sandbox
                  </a>
              </div>
          </div>

          {/* QR 3: Personal Portfolio */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://tracychacon.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/TracyChacon_PortfolioQR.png" 
                        alt="Personal Portfolio QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://tracychacon.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    Personal Portfolio & Web Architecture Migration
                  </a>
              </div>
          </div>
          
          {/* QR 4: GitHub */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://github.com/TracyChacon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/github_qr.png" 
                        alt="GitHub QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://github.com/TracyChacon" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    github.com/tracychacon
                  </a>
              </div>
          </div>

          {/* QR 5: LinkedIn */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://www.linkedin.com/in/tracy-chacon-862a5699/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/linkedin_qr.png" 
                        alt="LinkedIn QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://www.linkedin.com/in/tracy-chacon-862a5699/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    linkedin.com/in/tracychacon
                  </a>
              </div>
          </div>

          {/* QR 6: freeCodeCamp */}
          <div className="text-center bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 w-full max-w-[2.1in]">
              <div className="w-[110px] h-[110px] mx-auto mb-2 border border-[#cbd5e1] bg-white rounded flex items-center justify-center relative overflow-hidden">
                  <a href="https://www.freecodecamp.org/tracychacon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full relative">
                      <Image 
                        src="/resume/freecodecamp_qr.png" 
                        alt="freeCodeCamp QR" 
                        fill 
                        className="object-contain p-1"
                      />
                  </a>
              </div>
              <div className="text-[8pt] font-bold text-[#1e3a8a] break-words">
                  <a href="https://www.freecodecamp.org/tracychacon" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1e3a8a]">
                    freecodecamp.org/tracychacon
                  </a>
              </div>
          </div>

        </div>
      </div>

      {/* Bottom Download Button */}
      <div className="mt-12 text-center pb-8">
        <a 
          href="/resume/Tracy_Chacon_Resume.pdf" 
          download="Tracy_Chacon_Resume.pdf"
          className="inline-block bg-[#1e3a8a] hover:bg-blue-950 text-white px-6 py-3 rounded-md font-semibold text-sm transition-colors shadow-sm"
        >
          Download PDF Version
        </a>
      </div>

    </main>
  );
}