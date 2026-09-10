import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import {
  CounsellingBand,
  FacultyCard,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/Bits";
import { faculty, institute, methodology, whyUs } from "@/data/site";

const title = `About Us | ${institute.name}`;
const description =
  "Learn how our coaching institute teaches Grades 8 to 10 across SSC, CBSE and ICSE boards, and prepares students for JEE Main, MHT-CET and NEET-UG.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const beliefs = [
  {
    title: "Understanding beats memorising",
    text: "A student who understands why a formula works can handle a question they have never seen before. That is what boards and entrance exams actually test.",
  },
  {
    title: "Small batches, real attention",
    text: "Teaching only works when the teacher can see who is struggling. We keep batches small enough that nobody sits at the back unnoticed.",
  },
  {
    title: "Consistency over intensity",
    text: "Steady weekly practice beats last-minute cramming. Our schedule is built around regular revision cycles, not exam-eve marathons.",
  },
  {
    title: "Honest feedback to parents",
    text: "Parents receive a clear picture of progress after every test cycle — strengths, gaps and the plan to close them.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A coaching institute built around understanding, not shortcuts."
        subtitle="We coach students from Grade 8 through the board years, and prepare them for JEE Main, MHT-CET and NEET-UG — with the same emphasis on fundamentals throughout."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHeading eyebrow="Our Story" title="Why we started" center={false} />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                [Add your founding story here — when the institute started, who founded it, and what
                gap you set out to fill for students in your city.]
              </p>
              <p>
                [Describe the early years: the first batches, the subjects you began with, and how
                the programme grew into school coaching plus entrance preparation.]
              </p>
              <p>
                What has not changed is the approach. Every batch, in every subject, follows the
                same cycle — teach the concept properly, practise it until it is automatic, test it
                honestly, and fix what the test exposes.
              </p>
            </div>
          </div>

          <aside className="surface-card h-fit p-6">
            <h3 className="font-display text-lg font-bold text-primary">At a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Established</dt>
                <dd className="font-medium text-foreground">[Year Established]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Grades taught</dt>
                <dd className="font-medium text-foreground">Grade 8 to Grade 10</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Boards</dt>
                <dd className="font-medium text-foreground">SSC · CBSE · ICSE</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Entrance exams</dt>
                <dd className="font-medium text-foreground">JEE Main · MHT-CET · NEET-UG</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-medium text-foreground">{institute.address}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Working hours</dt>
                <dd className="font-medium text-foreground">{institute.hours}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What We Believe" title="Four things we do not compromise on" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {beliefs.map((b) => (
            <article key={b.title} className="surface-card p-6">
              <CheckCircle2 className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Method"
          title="Learn → Practice → Test → Analyse → Improve → Achieve"
          subtitle="The same six-step cycle runs through every programme we teach."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {methodology.map((m, i) => (
            <li key={m.step} className="surface-card p-6">
              <span className="font-display text-4xl font-bold text-primary-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-primary">{m.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Why Us" title="Why Parents & Students Choose Us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="font-display text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Faculty"
          title="Meet the People Behind the Learning"
          subtitle="Profiles are placeholders until real faculty details are published."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <FacultyCard key={`${f.subject}-${i}`} {...f} />
          ))}
        </div>
      </Section>

      <CounsellingBand />
    </>
  );
}
