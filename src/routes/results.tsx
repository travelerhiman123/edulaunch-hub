import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

import { CounsellingBand, PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { institute, resultHighlights, stats } from "@/data/site";

const title = `Results | ${institute.name}`;
const description =
  "Board and competitive exam result highlights for our Grade 10, JEE Main, MHT-CET and NEET-UG students.";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsPage,
});

const successStories = [
  {
    label: "Grade 10 Board",
    text: "[Add a short success story — student initials, board, and what changed over the year.]",
  },
  {
    label: "JEE Main",
    text: "[Add a short success story — the starting point, the work put in, and the outcome.]",
  },
  {
    label: "MHT-CET",
    text: "[Add a short success story — subjects improved and the admission secured.]",
  },
  {
    label: "NEET-UG",
    text: "[Add a short success story — preparation approach and the result achieved.]",
  },
];

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Helping Students Turn Potential Into Performance."
        subtitle="Our results pages will carry verified board and entrance exam outcomes, published only once we have the official mark sheets in hand."
      />

      <Section>
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">A note on the numbers below.</span> Every
            figure on this page is a placeholder shown in square brackets. We do not publish ranks,
            percentages or student names until they are confirmed against official results and the
            student has agreed to share them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            >
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="By Examination"
          title="Result highlights"
          subtitle="Board results and entrance exam outcomes, grouped by examination."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {resultHighlights.map((r) => (
            <article key={r.title} className="surface-card p-6">
              <h3 className="font-display text-lg font-bold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Success Stories"
          title="Behind every score is a year of work"
          subtitle="Short accounts of how students moved from where they started to where they finished."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {successStories.map((s) => (
            <article key={s.label} className="surface-card p-6">
              <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
                {s.label}
              </span>
              <p className="mt-4 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CounsellingBand />
    </>
  );
}
