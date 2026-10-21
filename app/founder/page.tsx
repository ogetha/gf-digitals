import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Mind Behind GF Digitals",
};

export default function FounderPage() {
  return (
    <main className="mx-auto max-w-3xl border-l-4 border-gold px-6 py-20 md:px-10 md:py-28">
      <h1 className="text-4xl">The mind behind GF Digitals</h1>
      <p className="mt-4 text-xl text-ink">Built on strategy. Driven by possibility.</p>

      <div className="mt-8 space-y-5 text-charcoal/85">
        <p>
          GF Digitals was founded on the belief that digital growth should be
          intentional, intelligent and connected to real business needs.
        </p>
        <p>
          As technology continues to change how brands communicate and operate,
          our focus remains on combining human creativity, strategic thinking
          and intelligent tools to build better digital experiences.
        </p>
        <p>
          We believe great work begins with understanding the problem, asking
          better questions and building solutions that make sense.
        </p>
        {/* TODO: add the full founder story here once the copy is written */}
      </div>

      <a
        href="/#book"
        className="mt-10 inline-block border border-ink bg-ember px-6 py-3 text-sm font-medium text-ink shadow-[4px_4px_0_0_#0A0A0A] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        Book a free fit call
      </a>
    </main>
  );
}
