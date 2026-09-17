import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy — GF Digitals",
};

export default function AcademyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <h1 className="text-4xl">GF Digitals Academy</h1>
      <p className="mt-6 text-charcoal/85">
        [PLACEHOLDER — describe the academy: what it teaches, who it&apos;s
        for, format (self-paced / cohort / mentorship), and what someone
        walks away with. This page can grow independently later without
        affecting the main site&apos;s sales flow.]
      </p>

      <a
        href="#"
        className="mt-8 inline-block border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-gold hover:border-gold hover:text-ink"
      >
        Join the waitlist
      </a>
    </main>
  );
}
