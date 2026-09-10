import { Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import type { ReactNode } from "react";

import { type Program } from "@/data/site";

export function Section({
  children,
  className = "",
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "muted" | "navy";
}) {
  const toneClass =
    tone === "muted" ? "bg-secondary/60" : tone === "navy" ? "bg-navy-gradient text-primary-foreground" : "";
  return (
    <section id={id} className={`${toneClass} scroll-mt-20 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  invert = false,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${invert ? "text-accent" : "text-accent"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-3xl font-bold sm:text-4xl ${invert ? "text-primary-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${invert ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PrimaryCta({ children = "Book a Free Counselling Session" }: { children?: ReactNode }) {
  return (
    <Link
      to="/contact"
      hash="enquiry"
      className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="surface-card flex flex-col p-6">
      <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground">
        {program.kicker}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold text-primary">{program.name}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{program.summary}</p>
      <Link
        to="/programs/$slug"
        params={{ slug: program.slug }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
      >
        Learn More <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <figure className="surface-card p-6">
      <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-foreground">“{quote}”</blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-primary">{name}</span>
        <span className="block text-muted-foreground">{role}</span>
      </figcaption>
    </figure>
  );
}

export function FacultyCard({
  name,
  subject,
  qualification,
  experience,
  bio,
}: {
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  bio: string;
}) {
  return (
    <article className="surface-card p-6 text-center">
      <div className="mx-auto grid size-20 place-items-center rounded-full bg-primary-soft font-display text-2xl font-bold text-primary">
        {subject.charAt(0)}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-primary">{name}</h3>
      <p className="text-sm font-semibold text-accent">{subject}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        {qualification} · {experience}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{bio}</p>
    </article>
  );
}

export function CounsellingBand() {
  return (
    <Section tone="navy">
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionHeading
          eyebrow="Free Counselling"
          title="Not Sure Which Program Is Right for You?"
          subtitle="Talk to our academic counsellors and find the right learning path for your child."
          invert
        />
        <PrimaryCta />
      </div>
    </Section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-hero-gradient">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-primary sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
        <div className="mt-8">
          <PrimaryCta />
        </div>
      </div>
    </div>
  );
}
