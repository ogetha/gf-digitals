import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Founder — GF Digitals",
};

export default function FounderPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
      <h1 className="text-4xl">Meet the founder</h1>

      <div className="mt-8 space-y-5 text-charcoal/85">
        <p>
          [PLACEHOLDER — full founder story. Cover: who you are, why you
          started GF Digitals, the problem you saw in how brands approach
          digital growth, and what you believe makes GF Digitals&apos;
          approach different.]
        </p>
        <p>
          [PLACEHOLDER — a paragraph on your philosophy/standard: e.g. the
          idea that GF Digitals audits and applies everything to itself
          first before recommending it to clients.]
        </p>
        <p>
          [PLACEHOLDER — credentials, past work, roles, or experience that
          build credibility. Keep it specific, not a list of adjectives.]
        </p>
      </div>

      <a
        href="/#book"
        className="mt-10 inline-block border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-gold hover:border-gold hover:text-ink"
      >
        Book a free fit call
      </a>
    </main>
  );
}
