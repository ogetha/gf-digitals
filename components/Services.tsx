const services = [
  {
    title: "Social Media Management",
    copy: "[PLACEHOLDER] Strategy and content that turns followers into customers — planned, created, and managed end to end.",
    href: "#book",
    cta: "Book a fit call",
  },
  {
    title: "Digital Products",
    copy: "[PLACEHOLDER] Templates, playbooks, and tools built from what actually works in the field, not theory.",
    href: "#book",
    cta: "See products",
  },
  {
    title: "1:1 Consultation",
    copy: "[PLACEHOLDER] A focused strategy session on your digital presence — positioning, content, or systems.",
    href: "#book",
    cta: "Book a session",
  },
  {
    title: "Academy",
    copy: "[PLACEHOLDER] Learn the strategy and systems behind digital growth, at your own pace.",
    href: "/academy",
    cta: "Explore the academy",
    subtle: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h2 className="text-3xl">What we do</h2>
      <p className="mt-3 max-w-md text-charcoal/70">
        [PLACEHOLDER — one line reinforcing the offer as a system, not a menu]
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="relative bg-paper p-8">
            <span className="absolute left-0 top-0 h-1 w-10 bg-gold" aria-hidden="true" />
            <h3 className="mt-4 text-xl">{s.title}</h3>
            <p className="mt-3 text-sm text-charcoal/75">{s.copy}</p>
            <a
              href={s.href}
              className={
                s.subtle
                  ? "mt-6 inline-block text-sm text-charcoal/70 underline decoration-line underline-offset-4 hover:text-ink"
                  : "mt-6 inline-block border-b border-ink text-sm font-medium text-ink hover:border-gold hover:text-gold"
              }
            >
              {s.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
