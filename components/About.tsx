export default function About() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-8 border-l-4 border-gold pl-6 md:grid-cols-3 md:gap-12">
          <h2 className="text-2xl !text-sand md:col-span-1">
            Built for brands that need more than content.
          </h2>
          <div className="max-w-prose space-y-4 text-sand/85 md:col-span-2">
            <p>
              Your brand needs more than active posting. It needs clear
              positioning, purposeful content, consistent brand management and
              automated systems that support your goals.
            </p>
            <p>
              GF Digitals connects strategy, creativity and intelligent
              automation to help your brand attract the right audience,
              communicate its value and turn digital visibility into meaningful
              business opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
