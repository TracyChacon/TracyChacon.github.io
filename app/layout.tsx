import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tracy Chacon | Software QA & Full-Stack Developer",
  description: "Portfolio and interactive dashboard showcasing test automation pipelines, defensive engineering, and modern web application craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Tracy Chacon",
    "jobTitle": "Software QA & Full-Stack Developer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "freeCodeCamp"
    },
    // Using explicit DefinedTerm structures makes it mathematically clear to crawlers
    "knowsAbout": [
      // 1. Core Engineering & Quality Assurance
      { "@type": "DefinedTerm", "name": "Software Quality Assurance" },
      { "@type": "DefinedTerm", "name": "Test Automation" },
      { "@type": "DefinedTerm", "name": "Defensive Programming" },
      
      // 2. Full-Stack Runtimes & Ecosystems
      { "@type": "DefinedTerm", "name": "Next.js" },
      { "@type": "DefinedTerm", "name": "TypeScript" },
      { "@type": "DefinedTerm", "name": "Java" },
      { "@type": "DefinedTerm", "name": "Spring Boot" },
      { "@type": "DefinedTerm", "name": "Groovy" },
      { "@type": "DefinedTerm", "name": "Python" },
      { "@type": "DefinedTerm", "name": "Django" },
      
      // 3. Infrastructure, Databases & Tooling
      { "@type": "DefinedTerm", "name": "PostgreSQL" },
      { "@type": "DefinedTerm", "name": "Relational Database" },
      { "@type": "DefinedTerm", "name": "MongoDB" },
      { "@type": "DefinedTerm", "name": "APIs" },
      { "@type": "DefinedTerm", "name": "CLI" },
      { "@type": "DefinedTerm", "name": "Bash" },
      
      // 4. Content Management Systems & E-Commerce Platforms
      { "@type": "DefinedTerm", "name": "WordPress Development" },
      { "@type": "DefinedTerm", "name": "Shopify Development" },
      { "@type": "DefinedTerm", "name": "Wix Development" },
      
      // 5. Modern Digital Growth & Optimization (The Core Pillars)
      { "@type": "DefinedTerm", "name": "Performance Optimization" },
      { "@type": "DefinedTerm", "name": "Domain Management" },
      { "@type": "DefinedTerm", "name": "Hosting Strategy" },
      { "@type": "DefinedTerm", "name": "Structured Data" },
      { "@type": "DefinedTerm", "name": "Content Quality" },
      { "@type": "DefinedTerm", "name": "AI Search Visibility" },
      { "@type": "DefinedTerm", "name": "AEO" },
      { "@type": "DefinedTerm", "name": "SEO" }
    ]
  }
};

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8TMZ2KM2BY"
        >
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8TMZ2KM2BY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}