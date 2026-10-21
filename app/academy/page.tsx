import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy — GF Digitals",
};

export default function AcademyPage() {
  return (
    <main className="mx-auto max-w-3xl border-l-4 border-gold px-6 py-20 md:px-10 md:py-28">
      <h1 className="text-4xl">GF Digitals Academy</h1>
      <p className="mt-4 text-xl text-ink">
        Learn beyond the post. Build skills that move businesses forward.
      </p>

      <div className="mt-8 space-y-5 text-charcoal/85">
        <p>
          The digital industry needs more than people who know how to create
          content. It needs professionals who understand strategy, business
          goals, intelligent systems and measurable execution.
        </p>
        <p>
          GF Digitals Academy equips aspiring and growing digital professionals
          with practical capabilities in social media strategy, content
          management, AI-powered workflows, analytics and professional client
          delivery.
        </p>
      </div>

      <h2 className="mt-12 text-2xl">Built for people ready to do more with their skills.</h2>
      <p className="mt-4 text-charcoal/85">
        Whether you&apos;re entering the digital industry, improving your
        professional capabilities or preparing to serve more established
        clients, our programmes focus on helping you develop skills you can
        confidently apply.
      </p>

      <h2 className="mt-12 text-2xl">Learn. Apply. Get feedback. Improve.</h2>
      <div className="mt-4 space-y-5 text-charcoal/85">
        <p>
          Our learning approach brings together structured training, practical
          assignments, professional guidance, community and real-world
          application.
        </p>
        <p>
          The goal is simple: build the confidence and capability to understand
          a business, develop a strategy, execute professionally and explain
          the results.
        </p>
      </div>

      {/* Replace href with your waitlist form or provider link */}
      <a
        id="waitlist"
        href="#"
        className="mt-10 inline-block border border-ink bg-ember px-6 py-3 text-sm font-medium text-ink shadow-[4px_4px_0_0_#0A0A0A] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
      >
        Join the next cohort waitlist
      </a>
    </main>
  );
}
