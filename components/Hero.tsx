export default function Hero() {
  return (
    <section className="bg-sand">
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:grid-cols-2 md:px-10 md:pb-24 md:pt-20">
      <div>
        <h1 className="max-w-xl text-4xl leading-[1.1] tracking-tight md:text-5xl">
          Your brand deserves a presence that gets noticed. Let&apos;s make sure the right people notice.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-charcoal/80">
          GF Digitals helps ambitious brands build strategic digital systems that
          increase visibility, strengthen brand positioning, and drive business
          growth through creative strategy, AI-powered automation, and
          professional brand management.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="border border-ink bg-ember px-6 py-3 text-sm font-medium text-ink shadow-[4px_4px_0_0_#0A0A0A] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Book a free fit call
          </a>
          <a
            href="#services"
            className="border-b-2 border-forest pb-0.5 text-sm font-medium text-forest hover:border-ember hover:text-ember"
          >
            Explore our services
          </a>
        </div>
      </div>

      <NodeGraphic />
    </div>
    </section>
  );
}

/* Flat colour-blocked "connected system" motif. Solid shapes only —
   no gradients or shadows. */
function NodeGraphic() {
  return (
    <svg
      viewBox="0 0 480 400"
      className="h-auto w-full max-w-md justify-self-center md:justify-self-end"
      aria-hidden="true"
    >
      <rect x="40" y="40" width="260" height="260" fill="#123D36" />
      <circle cx="340" cy="130" r="90" fill="#C9A648" />
      <rect x="220" y="230" width="200" height="130" fill="#D9622B" />
      <circle cx="110" cy="310" r="50" fill="#F6D8C8" stroke="#0A0A0A" strokeWidth="2" />
      <line x1="110" y1="310" x2="170" y2="120" stroke="#0A0A0A" strokeWidth="2" />
      <line x1="170" y1="120" x2="340" y2="130" stroke="#F3E9D8" strokeWidth="2" />
      <line x1="340" y1="130" x2="320" y2="290" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="170" cy="120" r="12" fill="#F3E9D8" />
      <circle cx="340" cy="130" r="12" fill="#0A0A0A" />
      <circle cx="320" cy="290" r="12" fill="#F3E9D8" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="110" cy="310" r="9" fill="#0A0A0A" />
    </svg>
  );
}
