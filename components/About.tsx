export default function About() {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <h2 className="text-2xl md:col-span-1">
            [PLACEHOLDER — replace with real about copy]
          </h2>
          <div className="max-w-prose text-charcoal/85 md:col-span-2">
            <p>
              GF Digitals helps ambitious brands connect strategy, content,
              AI, and systems — because most businesses don&apos;t have one
              social media problem, they have a disconnected digital
              ecosystem. We build the systems that fix that.
            </p>
            <p className="mt-4">
              <a href="/founder" className="border-b border-ink hover:border-gold hover:text-gold">
                Meet the founder
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
