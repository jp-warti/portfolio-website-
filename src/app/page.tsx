import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  profile,
  experiences,
  caseStudies,
  research,
  education,
} from "@/data/content";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span className="w-8 h-px bg-accent" />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="pt-14">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-accent font-mono text-sm">Hello, I&apos;m</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {profile.name}
            </h1>
            <p className="text-xl text-muted">{profile.title}</p>
            <p className="text-muted leading-relaxed max-w-lg">
              {profile.tagline}
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#case-studies"
                className="px-6 py-2.5 border border-card-border rounded-lg text-sm font-medium text-muted hover:border-accent hover:text-foreground transition-colors"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/profile-raw.jpg"
              alt={profile.name}
              width={280}
              height={280}
              className="rounded-2xl object-cover border-2 border-card-border"
              priority
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading>About</SectionHeading>
          <p className="text-muted leading-relaxed max-w-3xl">
            {profile.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Stablecoin Infrastructure",
              "RWA Partnerships",
              "Ecosystem Fund Operations",
              "Cross-chain Settlement",
              "Institutional BD",
              "GTM Strategy",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-card-bg border border-card-border rounded-full text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 p-4 bg-card-bg border border-card-border rounded-lg">
            <p className="text-sm text-muted">
              <span className="text-foreground font-medium">Education:</span>{" "}
              {education.school} — {education.degree} ({education.period})
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading>Experience</SectionHeading>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border border-card-border rounded-lg p-6 bg-card-bg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-accent font-mono text-sm">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <p className="text-sm text-muted mt-1 sm:mt-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-accent"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading>Case Studies</SectionHeading>
          <div className="space-y-4">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} study={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading>Strategic Research</SectionHeading>
          <div className="grid md:grid-cols-2 gap-4">
            {research.map((r) => (
              <a
                key={r.partner}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-card-border rounded-lg p-5 bg-card-bg hover:border-accent/50 transition-colors group"
              >
                <p className="text-xs font-mono text-accent">
                  w/ {r.partner}
                </p>
                <h3 className="text-sm font-semibold mt-2 group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {r.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading>
            <span className="mx-auto">Get in Touch</span>
          </SectionHeading>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Open to discussing new opportunities in blockchain BD, institutional
            partnerships, and ecosystem growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              {profile.email}
            </a>
            <a
              href={`https://t.me/${profile.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-card-border rounded-lg text-sm text-muted hover:border-accent hover:text-foreground transition-colors"
            >
              Telegram {profile.telegram}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-card-border rounded-lg text-sm text-muted hover:border-accent hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-muted">
          © 2026 {profile.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
