import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { institute } from "@/data/site";

const title = `Terms & Conditions | ${institute.name}`;
const description = `The terms that apply to this website and to enrolment at ${institute.name}.`;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      `These terms apply to your use of this website and to enrolment at ${institute.name}. By using the site or submitting an enquiry, you agree to them.`,
    ],
  },
  {
    heading: "Information on this website",
    paragraphs: [
      "We aim to keep course details, batch timings and other information on this site accurate and current. Details may change — batch schedules, syllabus coverage and fees are confirmed at the time of admission, not by this website.",
      "Any figure shown in square brackets is a placeholder awaiting confirmed data and should not be relied upon.",
    ],
  },
  {
    heading: "No guarantee of results",
    paragraphs: [
      "We do not guarantee any particular rank, score, percentage or admission. Academic outcomes depend on the student's own effort, attendance and consistency alongside our teaching. Any results published on this site describe past performance of individual students and are not a promise of similar outcomes.",
    ],
  },
  {
    heading: "Admission and fees",
    bullets: [
      "Admission is confirmed once the enrolment formalities are completed and the applicable fee is paid. [Describe your admission process here.]",
      "Fees, instalment options and due dates are as communicated at the time of admission. [Insert your fee terms here.]",
      "Refund and cancellation terms: [Insert your refund policy here — this is important, state it plainly.]",
      "Seats in a batch are limited and allotted on a first-come basis. [Adjust if your process differs.]",
    ],
  },
  {
    heading: "Attendance and conduct",
    bullets: [
      "Students are expected to attend regularly, complete assigned work and sit scheduled tests.",
      "We ask students to treat teachers, classmates and the premises with respect.",
      "The institute may discontinue a student's enrolment for serious or repeated misconduct. [State any notice or refund treatment that applies.]",
    ],
  },
  {
    heading: "Study material and intellectual property",
    paragraphs: [
      "Notes, worksheets, question banks and test papers we provide are for the enrolled student's personal use. Copying, reselling or circulating them is not permitted.",
      "The text, design and images on this website belong to the institute or are used with permission.",
    ],
  },
  {
    heading: "Enquiries you send us",
    paragraphs: [
      "Submitting the enquiry form does not create a seat or an admission. It is a request for a callback from our counselling team.",
      "How we handle the details you send is set out in our Privacy Policy.",
    ],
  },
  {
    heading: "Changes to schedules",
    paragraphs: [
      "Batch timings, faculty allocation and the academic calendar may be adjusted where necessary. We will inform enrolled students and parents of any material change.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at [City], Maharashtra. [Confirm this with your legal adviser.]",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `For any question about these terms, write to ${institute.email} or call ${institute.phone}.`,
      institute.address,
    ],
  },
];

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="The terms that apply to this website and to studying with us."
      sections={sections}
    />
  );
}
