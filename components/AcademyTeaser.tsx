export default function AcademyTeaser() {
  return (
    <section id="academy" className="bg-blush">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-1">
            <p className="text-sm font-medium uppercase tracking-wide text-ember">
              GF Digitals Academy
            </p>
            <h2 className="mt-3 text-3xl">
              Learn beyond the post. Build skills that move businesses forward.
            </h2>
          </div>
          <div className="max-w-prose space-y-4 text-ink/85 md:col-span-2">
            <p>
              The digital industry needs more than people who know how to create
              content. It needs professionals who understand strategy, business
              goals, intelligent systems and measurable execution.
            </p>
            <p>
              GF Digitals Academy equips aspiring and growing digital
              professionals with practical capabilities in social media
              strategy, content management, AI-powered workflows, analytics and
              professional client delivery.
            </p>
            <p className="font-medium text-ink">
              Learn. Apply. Get feedback. Improve.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              <a
                href="/academy"
                className="border border-ink bg-forest px-6 py-3 text-sm font-medium text-sand shadow-[4px_4px_0_0_#0A0A0A] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                Explore the Academy
              </a>
              <a
                href="/academy#waitlist"
                className="self-center border-b-2 border-ink text-sm font-medium text-ink hover:border-ember hover:text-ember"
              >
                Join the next cohort waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
