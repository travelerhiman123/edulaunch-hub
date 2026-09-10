import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap, MessageCircle, Phone } from "lucide-react";

import {
  CounsellingBand,
  FacultyCard,
  PrimaryCta,
  ProgramCard,
  Section,
  SectionHeading,
  TestimonialCard,
} from "@/components/site/Bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import {
  entranceFeatures,
  faculty,
  institute,
  methodology,
  programs,
  resultHighlights,
  stats,
  testimonials,
  trustPoints,
  whyUs,
} from "@/data/site";
import heroStudents from "@/assets/hero-students.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const school = programs.filter((p) => p.category === "school");
  const boards = programs.filter((p) => p.category === "board");
  const entrance = programs.filter((p) => p.category === "entrance");

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Grades 8–10 · JEE Main · MHT-CET · NEET
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
              Build Strong Foundations. Achieve Bigger Goals.
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Expert coaching for Grades 8–10 across SSC, CBSE &amp; ICSE Boards, along with focused
              preparation for JEE Main, MHT-CET and NEET.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryCta />
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-xl border border-input bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Explore Our Programs
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src={heroStudents}
              alt="Students working through problems together in a coaching classroom"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft sm:flex">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent-foreground">
                <GraduationCap className="size-5" />
              </span>
              <span className="text-sm">
                <span className="block font-semibold text-primary">Concepts before shortcuts</span>
                <span className="block text-muted-foreground">Small batches, real attention</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <Section id="programs">
        <SectionHeading
          eyebrow="Our Programs"
          title="Programs Designed for Every Stage of Your Journey"
          subtitle="School academics that build the base, and entrance preparation that turns that base into results."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...school, ...entrance].map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      {/* Boards */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="School Academic Coaching"
          title="One Institute. Multiple Boards. Personalised Learning."
          subtitle="Teaching mapped to your child's own syllabus and paper pattern — not a single generic course."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <PrimaryCta>Find the Right Program for Your Child</PrimaryCta>
        </div>
      </Section>

      {/* Entrance exams */}
      <Section tone="navy">
        <SectionHeading
          eyebrow="Entrance Exams"
          title="Prepare Today for Tomorrow's Biggest Opportunities."
          subtitle="Structured, exam-oriented preparation for engineering and medical entrances — built on concepts, practice and honest feedback."
          invert
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {entrance.map((p) => (
            <Link
              key={p.slug}
              to="/programs/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-colors hover:border-accent/60 hover:bg-primary-foreground/10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                {p.kicker}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-primary-foreground">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{p.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Learn More{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {entranceFeatures.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground/90"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Explore Entrance Preparation
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Us"
          title="Why Parents & Students Choose Us"
          subtitle="The things that actually move marks: clarity, practice, attention and consistency."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <article key={item.title} className="surface-card p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft font-display text-sm font-bold text-accent-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Method"
          title="Learn → Practice → Test → Analyse → Improve → Achieve"
          subtitle="A repeating cycle, run every chapter — so gaps show up early, not in the exam hall."
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

      {/* Results */}
      <Section>
        <SectionHeading
          eyebrow="Results"
          title="Helping Students Turn Potential Into Performance."
          subtitle="Verified figures will be published here. The values below are placeholders, not claims."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-secondary/60 p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {resultHighlights.map((r) => (
            <article key={r.title} className="surface-card p-6">
              <h3 className="font-display text-lg font-bold text-primary">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/results"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            See all results <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Students & Parents Say"
          subtitle="Sample content shown below until real, consented testimonials are added."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.role} name={t.name} role={t.role} quote={t.quote} />
          ))}
        </div>
      </Section>

      {/* Faculty */}
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

      {/* Counselling CTA */}
      <CounsellingBand />

      {/* Enquiry form */}
      <Section id="enquiry">
        <SectionHeading
          eyebrow="Enquire"
          title="Book a Free Counselling Session"
          subtitle="Tell us about the student and we will call you back at a time that suits you."
        />
        <div className="mt-12">
          <EnquiryForm />
        </div>
      </Section>

      {/* Contact */}
      <Section tone="muted" id="contact">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Visit Us"
              title="Come and See the Classroom"
              subtitle="Walk in for a conversation about your child's goals — no appointment needed."
              center={false}
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-primary">Address</dt>
                <dd className="text-muted-foreground">{institute.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Working Hours</dt>
                <dd className="text-muted-foreground">{institute.hours}</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">Email</dt>
                <dd>
                  <a href={institute.emailHref} className="text-muted-foreground hover:text-accent">
                    {institute.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={institute.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <a
                href={institute.whatsappHref}
                className="inline-flex items-center gap-2 rounded-xl border border-input bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {institute.mapEmbedSrc ? (
              <iframe
                src={institute.mapEmbedSrc}
                title={`Map to ${institute.name}`}
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-full min-h-[320px] place-items-center p-8 text-center text-sm text-muted-foreground">
                [Google Maps embed] — paste an embed URL into mapEmbedSrc in src/data/site.ts
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
