import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/Bits";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { institute } from "@/data/site";

const title = `Contact Us | ${institute.name}`;
const description =
  "Visit, call or WhatsApp us to book a free counselling session and find the right coaching programme for your child.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your child's next step."
        subtitle="Share a few details and an academic counsellor will call you back at a time that suits you — or simply walk in during working hours."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Reach Us"
              title="Institute details"
              subtitle="We are happy to answer questions about batches, syllabus coverage and fees."
              center={false}
            />

            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-primary">Address</span>
                  <span className="text-muted-foreground">{institute.address}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-primary">Phone</span>
                  <a href={institute.phoneHref} className="text-muted-foreground hover:text-accent">
                    {institute.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-primary">WhatsApp</span>
                  <a
                    href={institute.whatsappHref}
                    className="text-muted-foreground hover:text-accent"
                  >
                    {institute.whatsapp}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-primary">Email</span>
                  <a href={institute.emailHref} className="text-muted-foreground hover:text-accent">
                    {institute.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>
                  <span className="block font-semibold text-primary">Working Hours</span>
                  <span className="text-muted-foreground">{institute.hours}</span>
                </span>
              </li>
            </ul>

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
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {institute.mapEmbedSrc ? (
              <iframe
                src={institute.mapEmbedSrc}
                title={`Map to ${institute.name}`}
                className="h-full min-h-[380px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="grid h-full min-h-[380px] place-items-center p-8 text-center text-sm text-muted-foreground">
                [Google Maps embed] — paste an embed URL into mapEmbedSrc in src/data/site.ts
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section tone="muted" id="enquiry">
        <SectionHeading
          eyebrow="Enquiry Form"
          title="Book a Free Counselling Session"
          subtitle="Fields marked with an asterisk are required. We use your details only to respond to this enquiry."
        />
        <div className="mt-12">
          <EnquiryForm />
        </div>
      </Section>
    </>
  );
}
