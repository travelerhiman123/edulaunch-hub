/**
 * SINGLE SOURCE OF TRUTH for all institute-specific information.
 * Replace the placeholder values in square brackets with real details.
 */

export const institute = {
  name: "[Coaching Institute Name]",
  shortName: "[Institute]",
  tagline: "Building strong foundations. Creating confident learners.",
  address: "[Institute Address, City, Maharashtra – PIN]",
  phone: "[Phone Number]",
  phoneHref: "tel:+910000000000",
  whatsapp: "[WhatsApp Number]",
  whatsappHref: "https://wa.me/910000000000",
  email: "[Email Address]",
  emailHref: "mailto:hello@example.com",
  hours: "[Working Hours – e.g. Mon–Sat, 8:00 AM – 8:00 PM]",
  mapEmbedSrc: "", // paste a Google Maps embed URL here
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    whatsapp: "https://wa.me/910000000000",
  },
};

export type Program = {
  slug: string;
  name: string;
  category: "school" | "board" | "entrance";
  kicker: string;
  summary: string;
  intro: string;
  subjects: string[];
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "grade-8",
    name: "Grade 8",
    category: "school",
    kicker: "Foundation Programme",
    summary: "Build strong fundamentals and develop confident learning habits.",
    intro:
      "Grade 8 is where study habits are formed. Our foundation programme focuses on clear concept teaching, steady practice and a friendly classroom where asking questions is encouraged.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    highlights: [
      "Concept-first teaching with everyday examples",
      "Weekly practice worksheets and homework review",
      "Habit building: notes, revision and time-tables",
      "Regular topic tests with parent updates",
    ],
  },
  {
    slug: "grade-9",
    name: "Grade 9",
    category: "school",
    kicker: "Concept Strengthening",
    summary: "Strengthen concepts and prepare for higher-level academic challenges.",
    intro:
      "Grade 9 introduces the concepts that Grade 10 and competitive exams build upon. We go deeper into reasoning and problem solving while keeping school syllabus fully covered.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    highlights: [
      "In-depth coverage of Algebra, Geometry and Physics basics",
      "Structured problem-solving sessions",
      "Doubt-solving slots every week",
      "Early exposure to competitive-exam style questions",
    ],
  },
  {
    slug: "grade-10",
    name: "Grade 10",
    category: "school",
    kicker: "Board Focused",
    summary: "Board-focused preparation with intensive practice, revision and test series.",
    intro:
      "A board year needs a plan. We combine complete syllabus coverage with a disciplined revision and test schedule so students walk into the exam hall prepared and calm.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    highlights: [
      "Chapter-wise practice and previous years' papers",
      "Full-length board pattern test series",
      "Answer-writing and presentation guidance",
      "Focused revision cycles before exams",
    ],
  },
  {
    slug: "ssc",
    name: "SSC Board",
    category: "board",
    kicker: "Maharashtra State Board",
    summary: "Maharashtra State Board focused academic preparation.",
    intro:
      "Teaching aligned to the Maharashtra State Board syllabus and paper pattern, with practice sets built from state board question trends.",
    subjects: ["Mathematics I & II", "Science I & II", "English", "Social Science", "Marathi / Hindi"],
    highlights: [
      "State board paper pattern practice",
      "Language-friendly explanations",
      "Activity sheets and internal assessment support",
      "Regular tests mapped to board marking",
    ],
  },
  {
    slug: "cbse",
    name: "CBSE Board",
    category: "board",
    kicker: "CBSE Curriculum",
    summary: "Concept-driven preparation aligned with the CBSE curriculum.",
    intro:
      "CBSE rewards conceptual clarity and application. Our teaching follows NCERT closely and extends it with competency-based and case-study questions.",
    subjects: ["Mathematics", "Science", "English", "Social Science"],
    highlights: [
      "NCERT-first teaching with exemplar problems",
      "Competency-based and case-study questions",
      "Periodic tests in CBSE format",
      "Bridge to JEE / NEET foundation topics",
    ],
  },
  {
    slug: "icse",
    name: "ICSE Board",
    category: "board",
    kicker: "ICSE Curriculum",
    summary: "Detailed and comprehensive preparation aligned with ICSE requirements.",
    intro:
      "ICSE demands depth and strong written expression. We cover the wider syllabus thoroughly and train students to write complete, well-structured answers.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English Language & Literature", "History & Geography"],
    highlights: [
      "Subject-wise depth across Physics, Chemistry and Biology",
      "Answer-writing and English language practice",
      "Practical and diagram-based preparation",
      "Council pattern test papers",
    ],
  },
  {
    slug: "jee-main",
    name: "JEE Main",
    category: "entrance",
    kicker: "Engineering Entrance",
    summary: "Build the conceptual and problem-solving skills required for engineering entrance success.",
    intro:
      "JEE Main rewards clarity and speed. We build concepts from the ground up, then train application through graded problem sets, timed tests and detailed performance analysis.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    highlights: [
      "Complete JEE Main syllabus coverage",
      "Graded problem sets from basic to advanced",
      "Timed chapter tests and full-length mocks",
      "Error analysis and attempt strategy",
    ],
  },
  {
    slug: "mht-cet",
    name: "MHT-CET",
    category: "entrance",
    kicker: "Maharashtra Engineering Entrance",
    summary: "Maharashtra-focused preparation with targeted practice and mock tests.",
    intro:
      "MHT-CET is a speed and accuracy exam based on the state syllabus. Our preparation is tuned to that pattern, with heavy practice on high-weightage chapters.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    highlights: [
      "State syllabus aligned teaching",
      "Speed and accuracy drills",
      "Chapter-wise weightage analysis",
      "Full-length CET pattern mock tests",
    ],
  },
  {
    slug: "neet",
    name: "NEET-UG",
    category: "entrance",
    kicker: "Medical Entrance",
    summary: "Strengthen Physics, Chemistry and Biology concepts with focused medical entrance preparation.",
    intro:
      "NEET is won on Biology accuracy and Physics confidence. We combine thorough NCERT coverage with high-volume MCQ practice and regular full-length tests.",
    subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
    highlights: [
      "Line-by-line NCERT Biology coverage",
      "High-volume MCQ practice with revision cycles",
      "Physics numericals made approachable",
      "Full-length NEET pattern mock tests",
    ],
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);

export const trustPoints = [
  "Experienced Faculty",
  "Concept-Based Learning",
  "Regular Tests",
  "Personalised Attention",
];

export const whyUs = [
  {
    title: "Experienced Faculty",
    text: "Learn from dedicated and knowledgeable educators who teach for understanding.",
  },
  {
    title: "Strong Conceptual Foundation",
    text: "Understand concepts instead of simply memorising answers.",
  },
  {
    title: "Personalised Attention",
    text: "We identify individual strengths and areas that need work.",
  },
  {
    title: "Regular Tests & Assessments",
    text: "Track real progress through continuous evaluation.",
  },
  {
    title: "Doubt-Solving Support",
    text: "Dedicated doubt sessions so no question stays unanswered.",
  },
  {
    title: "Exam-Focused Strategy",
    text: "Effective approaches for both boards and competitive examinations.",
  },
];

export const methodology = [
  { step: "Learn", text: "Concepts taught from first principles in small, focused batches." },
  { step: "Practice", text: "Classroom practice, worksheets and structured homework." },
  { step: "Test", text: "Topic tests and full-length mock examinations." },
  { step: "Analyse", text: "Performance analysis to find exactly where marks are lost." },
  { step: "Improve", text: "Doubt resolution, targeted revision and re-tests." },
  { step: "Achieve", text: "Confident, exam-ready students with consistent habits." },
];

export const entranceFeatures = [
  "Complete syllabus coverage",
  "Concept building",
  "Problem-solving practice",
  "Regular chapter tests",
  "Full-length mock tests",
  "Performance analysis",
  "Doubt-solving sessions",
  "Exam strategy & time management",
];

/** Placeholder statistics — replace with verified data before publishing. */
export const stats = [
  { value: "[XX]+", label: "Students Mentored" },
  { value: "[XX]%", label: "Board Success Rate" },
  { value: "[XX]+", label: "Competitive Exam Selections" },
  { value: "[XX]", label: "Top Score / Achievement" },
];

export const resultHighlights = [
  { title: "Board Results", text: "[Add Grade 10 SSC / CBSE / ICSE result highlights here.]" },
  { title: "JEE Main", text: "[Add JEE Main achievements and percentile highlights here.]" },
  { title: "MHT-CET", text: "[Add MHT-CET percentile and admission highlights here.]" },
  { title: "NEET-UG", text: "[Add NEET-UG score and selection highlights here.]" },
];

/** Sample content — replace with real, consented testimonials. */
export const testimonials = [
  {
    name: "[Parent Name]",
    role: "Grade 10 Parent",
    quote:
      "[Sample testimonial] The teachers explained every concept patiently and kept us updated on progress through the year.",
  },
  {
    name: "[Student Name]",
    role: "JEE Main Student",
    quote:
      "[Sample testimonial] The weekly tests and detailed analysis showed me exactly which chapters needed more work.",
  },
  {
    name: "[Student Name]",
    role: "NEET Student",
    quote:
      "[Sample testimonial] Biology revision cycles and doubt sessions made a big difference to my accuracy.",
  },
  {
    name: "[Student Name]",
    role: "CBSE Student",
    quote:
      "[Sample testimonial] Classes stayed ahead of school, so board preparation never felt rushed.",
  },
];

/** Placeholder faculty — replace with real profiles. */
export const faculty = [
  {
    name: "[Faculty Name]",
    subject: "Physics",
    qualification: "[Qualification]",
    experience: "[XX] years",
    bio: "[Short introduction about teaching approach and experience.]",
  },
  {
    name: "[Faculty Name]",
    subject: "Mathematics",
    qualification: "[Qualification]",
    experience: "[XX] years",
    bio: "[Short introduction about teaching approach and experience.]",
  },
  {
    name: "[Faculty Name]",
    subject: "Chemistry",
    qualification: "[Qualification]",
    experience: "[XX] years",
    bio: "[Short introduction about teaching approach and experience.]",
  },
  {
    name: "[Faculty Name]",
    subject: "Biology",
    qualification: "[Qualification]",
    experience: "[XX] years",
    bio: "[Short introduction about teaching approach and experience.]",
  },
];
