import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Repeater / Dropper"];
const boards = ["SSC", "CBSE", "ICSE", "Other"];
const programOptions = [
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "SSC",
  "CBSE",
  "ICSE",
  "JEE Main",
  "MHT-CET",
  "NEET",
];
const contactTimes = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 8 PM)"];

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30";
const labelClass = "mb-1.5 block text-sm font-medium text-primary";

type Errors = Record<string, string>;

export function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Errors = {};

    const studentName = String(data.get("studentName") ?? "").trim();
    const mobile = String(data.get("mobile") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const grade = String(data.get("grade") ?? "");
    const program = String(data.get("program") ?? "");

    if (studentName.length < 2) next.studentName = "Please enter the student's name.";
    if (!/^[6-9]\d{9}$/.test(mobile.replace(/[\s-]/g, "")))
      next.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Enter a valid email address.";
    if (!grade) next.grade = "Please select the current grade.";
    if (!program) next.program = "Please select a program.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  if (submitted) {
    return (
      <div className="surface-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-accent" />
        <h3 className="mt-4 font-display text-xl font-bold text-primary">Thank you — your enquiry is in.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Our academic counsellor will contact you at your preferred time to discuss the right programme.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="studentName">
            Student Name *
          </label>
          <input id="studentName" name="studentName" className={fieldClass} placeholder="Full name" />
          {errors.studentName && <p className="mt-1.5 text-xs text-destructive">{errors.studentName}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="parentName">
            Parent / Guardian Name
          </label>
          <input id="parentName" name="parentName" className={fieldClass} placeholder="Full name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="mobile">
            Mobile Number *
          </label>
          <input id="mobile" name="mobile" inputMode="numeric" className={fieldClass} placeholder="10-digit number" />
          {errors.mobile && <p className="mt-1.5 text-xs text-destructive">{errors.mobile}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="grade">
            Current Grade *
          </label>
          <select id="grade" name="grade" defaultValue="" className={fieldClass}>
            <option value="">Select grade</option>
            {grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.grade && <p className="mt-1.5 text-xs text-destructive">{errors.grade}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="board">
            Board
          </label>
          <select id="board" name="board" defaultValue="" className={fieldClass}>
            <option value="">Select board</option>
            {boards.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="program">
            Program Interested In *
          </label>
          <select id="program" name="program" defaultValue="" className={fieldClass}>
            <option value="">Select program</option>
            {programOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.program && <p className="mt-1.5 text-xs text-destructive">{errors.program}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="contactTime">
            Preferred Contact Time
          </label>
          <select id="contactTime" name="contactTime" defaultValue="" className={fieldClass}>
            <option value="">No preference</option>
            {contactTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={fieldClass}
            placeholder="Anything you would like us to know?"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Submit Enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Fields marked * are required. We use your details only to respond to this enquiry.
      </p>
    </form>
  );
}
