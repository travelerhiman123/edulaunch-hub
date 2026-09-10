import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";

import {
  CounsellingBand,
  PageHero,
  Section,
  SectionHeading,
  TestimonialCard,
} from "@/components/site/Bits";
import { institute, testimonials } from "@/data/site";

const title = `Testimonials | ${institute.name}`;
const description =
  "What students and parents say about our coaching for Grades 8 to 10 and JEE Main, MHT-CET and NEET-UG preparation.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Students & Parents Say"
        subtitle="Feedback from the families we teach — on the classroom, the tests and the support along the way."
      />

      <Section>
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/60 p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Sample content.</span> The testimonials
            below are examples marked in square brackets. They will be replaced with real, consented
            feedback from our students and parents.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.role} name={t.name} role={t.role} quote={t.quote} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Share Yours"
          title="Studied with us?"
          subtitle="If you or your child has been part of a batch here, we would be glad to hear how it went. Write to us and, with your permission, we will publish it on this page."
        />
        <div className="mt-8 text-center">
          <a
            href={institute.emailHref}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Email us your feedback
          </a>
        </div>
      </Section>

      <CounsellingBand />
    </>
  );
}
