import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { institute } from "@/data/site";

const title = `Privacy Policy | ${institute.name}`;
const description = `How ${institute.name} collects, uses and protects the information you share through this website.`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    heading: "What this policy covers",
    paragraphs: [
      `This policy explains what information ${institute.name} collects when you use this website or send us an enquiry, why we collect it, and what we do with it.`,
      "It applies to this website only. If you contact us by phone, WhatsApp or in person, the same principles apply to how we handle your details.",
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: ["We collect only what we need in order to respond to you:"],
    bullets: [
      "Details you type into the enquiry form: student name, parent or guardian name, mobile number, email address, current grade, board, programme of interest, preferred contact time and your message.",
      "Basic technical information your browser sends automatically, such as device type and pages visited, used to keep the site working correctly.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: ["Information you share is used to:"],
    bullets: [
      "Respond to your enquiry and arrange a counselling session.",
      "Advise you on the programme that suits the student.",
      "Share admission details, batch timings and fee information you have asked for.",
      "Keep a record of the enquiry so we can follow up accurately.",
    ],
  },
  {
    heading: "What we do not do",
    bullets: [
      "We do not sell your personal information.",
      "We do not share your details with other coaching institutes or advertisers.",
      "We do not publish a student name, photograph, result or testimonial without permission.",
    ],
  },
  {
    heading: "Keeping your information",
    paragraphs: [
      "We keep enquiry details for as long as needed to respond and, if the student joins, for the period the student studies with us. [Specify your retention period here.]",
      "We take reasonable steps to keep records secure and limit access to staff who need them.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `You can ask us to correct or delete the details you have shared, or to stop contacting you, by writing to ${institute.email} or calling ${institute.phone}.`,
    ],
  },
  {
    heading: "Children and parental consent",
    paragraphs: [
      "Most of our students are minors. We expect enquiries to be made by a parent or guardian, or with their knowledge. If a minor has shared details with us and a parent would like them removed, contact us and we will remove them.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as our services change. The revised version will always be available on this page.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about this policy can be sent to ${institute.email} or ${institute.phone}.`,
      institute.address,
    ],
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This page explains how we handle the information you share with us."
      sections={sections}
    />
  );
}
