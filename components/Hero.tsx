export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-2 md:px-10 md:pb-24 md:pt-20">
      <div>
        <h1 className="max-w-lg text-4xl leading-[1.1] tracking-tight md:text-5xl">
          Digital growth, engineered — not guessed.
        </h1>
        <p className="mt-6 max-w-md text-lg text-charcoal/80">
          GF Digitals builds strategy, content, and systems for brands who
          need their digital presence to perform, not just exist.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-gold hover:border-gold hover:text-ink"
          >
            Book a free fit call
          </a>
          <a
            href="#services"
            className="border-b border-ink pb-0.5 text-sm font-medium text-ink hover:border-gold hover:text-gold"
          >
            See what we do
          </a>
        </div>
      </div>

      <NodeGraphic />
    </section>
  );
}

/* Abstract "connected system" motif — reused sparingly as a section divider
   elsewhere. Flat shapes, no gradients or shadows, brand colors only. */
function NodeGraphic() {
  return (
    <svg
      viewBox="0 0 480 400"
      className="h-auto w-full max-w-md justify-self-center md:justify-self-end"
      aria-hidden="true"
    >
      <line x1="80" y1="300" x2="240" y2="120" stroke="#0A0A0A" strokeWidth="1.5" />
      <line x1="240" y1="120" x2="400" y2="200" stroke="#0A0A0A" strokeWidth="1.5" />
      <line x1="240" y1="120" x2="180" y2="60" stroke="#C9A648" strokeWidth="1.5" />
      <line x1="80" y1="300" x2="360" y2="330" stroke="#0A0A0A" strokeWidth="1.5" />
      <line x1="400" y1="200" x2="360" y2="330" stroke="#C9A648" strokeWidth="1.5" />

      <circle cx="240" cy="120" r="10" fill="#0A0A0A" />
      <circle cx="80" cy="300" r="8" fill="#0A0A0A" />
      <circle cx="400" cy="200" r="8" fill="#0A0A0A" />
      <circle cx="180" cy="60" r="6" fill="#C9A648" />
      <circle cx="360" cy="330" r="10" fill="#D9622B" />
    </svg>
  );
}
