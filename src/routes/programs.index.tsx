import { createFileRoute } from "@tanstack/react-router";

import {
  CounsellingBand,
  PageHero,
  ProgramCard,
  Section,
  SectionHeading,
} from "@/components/site/Bits";
import { entranceFeatures, institute, programs } from "@/data/site";

const title = `Programs — Grades 8–10, SSC, CBSE, ICSE, JEE, MHT-CET & NEET | ${institute.name}`;
const description =
  "Explore coaching programmes for Grade 8, 9 and 10 across SSC, CBSE and ICSE boards, plus JEE Main, MHT-CET and NEET-UG entrance preparation.";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const school = programs.filter((p) => p.category === "school");
  const boards = programs.filter((p) => p.category === "board");
  const entrance = programs.filter((p) => p.category === "entrance");

  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs Designed for Every Stage of Your Journey"
        subtitle="From building fundamentals in Grade 8 to competitive exam preparation for JEE Main, MHT-CET and NEET — each programme is structured around concepts, practice and regular testing."
      />

      <Section>
        <SectionHeading eyebrow="School Academic Coaching" title="Grades 8 to 10" center={false} />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {school.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Boards"
          title="One Institute. Multiple Boards. Personalised Learning."
          center={false}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Entrance Exams"
          title="Prepare Today for Tomorrow's Biggest Opportunities."
          center={false}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entrance.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {entranceFeatures.map((f) => (
            <li key={f} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">
              {f}
            </li>
          ))}
        </ul>
      </Section>

      <CounsellingBand />
    </>
  );
}
