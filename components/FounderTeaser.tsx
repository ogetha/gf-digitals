export default function FounderTeaser() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-1">
            <p className="text-sm font-medium uppercase tracking-wide text-gold">
              The mind behind GF Digitals
            </p>
            <h2 className="mt-3 text-3xl !text-paper">Built on strategy. Driven by possibility.</h2>
          </div>
          <div className="max-w-prose space-y-4 text-paper/80 md:col-span-2">
            <p>
              GF Digitals was founded on the belief that digital growth should
              be intentional, intelligent and connected to real business needs.
            </p>
            <p>
              As technology continues to change how brands communicate and
              operate, our focus remains on combining human creativity,
              strategic thinking and intelligent tools to build better digital
              experiences.
            </p>
            <p>
              We believe great work begins with understanding the problem,
              asking better questions and building solutions that make sense.
            </p>
            <p>
              <a href="/founder" className="border-b-2 border-gold text-gold hover:border-paper hover:text-paper">
                Discover our story
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
