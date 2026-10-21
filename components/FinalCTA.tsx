export default function FinalCTA() {
  return (
    <section id="book" className="bg-sand">
    <div className="mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-28">
      <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">
        There&apos;s more potential in your digital presence. Discover
        what&apos;s possible.
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-charcoal/75">
        Your next stage of growth may not require doing more. It may require a
        different strategy, a stronger system or a clearer direction. Explore
        what GF Digitals can bring to your business.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#services"
          className="border-2 border-forest px-7 py-3.5 text-sm font-medium text-forest hover:bg-forest hover:text-sand"
        >
          Discover what&apos;s possible for your brand
        </a>
        {/* Replace href with your real booking link (e.g. Calendly) */}
        <a
          href="#"
          className="border border-ink bg-ember px-7 py-3.5 text-sm font-medium text-ink shadow-[4px_4px_0_0_#0A0A0A] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          Book a free fit call
        </a>
      </div>
    </div>
    </section>
  );
}
