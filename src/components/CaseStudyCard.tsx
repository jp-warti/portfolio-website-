"use client";

import { useState } from "react";
import type { CaseStudy } from "@/data/content";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border rounded-lg p-6 transition-all cursor-pointer ${
        expanded
          ? "border-accent bg-card-bg"
          : "border-card-border bg-card-bg hover:border-accent/50"
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-accent font-mono">{study.subtitle}</p>
          <h3 className="text-lg font-semibold mt-1">{study.title}</h3>
        </div>
        <svg
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-muted transition-transform flex-shrink-0 mt-1 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </div>

      <p className="text-sm text-muted mt-3">{study.keyOutcome}</p>

      {expanded && (
        <div className="mt-6 space-y-4 border-t border-card-border pt-4">
          {study.sections.map((s) => (
            <div key={s.heading}>
              <h4 className="text-sm font-semibold text-accent">{s.heading}</h4>
              <p className="text-sm text-muted mt-1 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
