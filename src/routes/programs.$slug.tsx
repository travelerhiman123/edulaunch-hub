import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { CounsellingBand, PageHero, ProgramCard, Section, SectionHeading } from "@/components/site/Bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { institute, programBySlug, programs } from "@/data/site";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programBySlug(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Program not found" }, { name: "robots", content: "noindex" }] };
    }
    const { program } = loaderData;
    const title = `${program.name} Coaching Classes | ${institute.name}`;
    const description = `${program.summary} ${program.kicker} at ${institute.name}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programs/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programs/${params.slug}` }],
    };
  },
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program } = Route.useLoaderData();
  const related = programs.filter((p) => p.category === program.category && p.slug !== program.slug);

  return (
    <>
      <PageHero eyebrow={program.kicker} title={`${program.name} Coaching`} subtitle={program.intro} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">What this programme covers</h2>
            <ul className="mt-6 space-y-4">
              {program.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">Subjects</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.subjects.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <aside className="surface-card h-fit p-6">
            <h3 className="font-display text-lg font-bold text-primary">Batch details</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Batch timings</dt>
                <dd className="font-medium text-foreground">[Batch Timings]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Batch size</dt>
                <dd className="font-medium text-foreground">[Batch Size]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Fees</dt>
                <dd className="font-medium text-foreground">[Fee Details]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Enquiries</dt>
                <dd className="font-medium text-foreground">
                  <a href={institute.phoneHref} className="text-accent-foreground underline">
                    {institute.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Also explore" title="Related programmes" center={false} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </Section>
      )}

      <Section id="enquiry">
        <SectionHeading
          eyebrow="Enquire"
          title={`Enquire about ${program.name}`}
          subtitle="Share a few details and our counsellor will get in touch."
        />
        <div className="mt-10">
          <EnquiryForm />
        </div>
      </Section>

      <CounsellingBand />
    </>
  );
}
