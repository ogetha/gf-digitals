const testimonials = [
  {
    quote:
      "[PLACEHOLDER TESTIMONIAL — swap in a real client quote once collected]",
    name: "Client name",
    role: "Brand / role",
  },
  {
    quote:
      "[PLACEHOLDER TESTIMONIAL — swap in a real client quote once collected]",
    name: "Client name",
    role: "Brand / role",
  },
  {
    quote:
      "[PLACEHOLDER TESTIMONIAL — swap in a real client quote once collected]",
    name: "Client name",
    role: "Brand / role",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <h2 className="text-3xl">What clients say</h2>

        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-paper p-7">
              <blockquote className="text-sm text-charcoal/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-charcoal/60">
                {t.name} — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
