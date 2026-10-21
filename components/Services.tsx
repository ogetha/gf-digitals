const tints = ["bg-butter", "bg-mint", "bg-blush", "bg-sand", "bg-butter"];
const bars = ["bg-ember", "bg-forest", "bg-gold", "bg-ember", "bg-forest"];

const services = [
  {
    title: "Social Media Management",
    tagline: "A stronger brand presence, without the daily management burden.",
    copy: [
      "From strategy and content planning to publishing, community engagement and performance reviews, we manage your social media.",
      "Our approach connects your brand message, audience and business goals so your platforms do more than stay active.",
    ],
    note: "Social media audits, strategy, content calendars, content creation, publishing, community management and analytics reporting, according to your selected package.",
    noteLabel: "What\u2019s included:",
    href: "#book",
    cta: "Explore social media management",
  },
  {
    title: "Digital Strategy",
    tagline: "Clarity before execution.",
    copy: [
      "Understand where your brand stands, what\u2019s limiting its digital performance and where the strongest opportunities exist.",
      "Through strategic audits, audience analysis and digital positioning, we develop actionable roadmaps that help you make informed decisions and execute with confidence.",
    ],
    note: "A clear diagnosis, strategic recommendations and a practical digital blueprint tailored to your business.",
    noteLabel: "What you get:",
    href: "#book",
    cta: "Explore digital strategy",
  },
  {
    title: "AI & Intelligent Systems",
    tagline: "Less repetitive work. More room for meaningful growth.",
    copy: [
      "Your team shouldn\u2019t spend valuable hours repeating processes that could be simplified.",
      "We explore how AI-powered content workflows, social media systems and practical automation can improve efficiency, consistency and execution across your business.",
      "Every system is designed around your existing workflows, business goals and social media strategy, with human oversight where it matters.",
    ],
    href: "#book",
    cta: "Explore AI & systems",
  },
  {
    title: "1:1 Strategic Consultation",
    tagline:
      "Get a focused professional perspective on your brand, content or digital operations, with practical recommendations to guide your next steps.",
    copy: [
      "Making decisions through trial and error can lead to missed opportunities, ineffective strategies and investments that deliver little value. You need an experienced perspective and a well-structured plan.",
      "Our consultation sessions help you examine a specific challenge, identify opportunities and establish practical next steps for your brand and digital operations.",
    ],
    href: "#book",
    cta: "Explore strategic consultation",
  },
  {
    title: "Digital Products",
    tagline: "Practical resources. Smarter execution.",
    copy: [
      "Access ready-to-use templates, strategic playbooks, guides and digital workflows designed to help you organise your work, make better decisions and execute with greater confidence.",
      "Built for business owners, creators and digital professionals who value structure and practical application.",
    ],
    href: "#resources",
    cta: "Explore digital products",
    secondaryHref: "#resources",
    secondaryCta: "Access free resources",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h2 className="max-w-2xl text-3xl">
        Your business doesn&apos;t need another service added to the list. It
        needs the right solution to the right problem.
      </h2>
      <p className="mt-3 max-w-xl text-charcoal/70">
        We examine what is working, identify what is missing, and build
        solutions around what your business actually needs.
      </p>

      <div className="mt-12 grid gap-px overflow-hidden border-2 border-ink bg-ink md:grid-cols-2">
        {services.map((s, i) => (
          <div key={s.title} className={`relative p-8 ${tints[i]}`}>
            <span className={`absolute left-0 top-0 h-1.5 w-14 ${bars[i]}`} aria-hidden="true" />
            <h3 className="mt-4 text-xl">{s.title}</h3>
            <p className="mt-2 text-sm font-medium text-ink">{s.tagline}</p>
            <div className="mt-3 space-y-3 text-sm text-charcoal/85">
              {s.copy.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.note && (
                <p>
                  <span className="font-medium text-ink">{s.noteLabel}</span>{" "}
                  {s.note}
                </p>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={s.href}
                className="inline-block border-b-2 border-ink text-sm font-medium text-ink hover:border-ember hover:text-ember"
              >
                {s.cta}
              </a>
              {s.secondaryHref && (
                <a
                  href={s.secondaryHref}
                  className="inline-block border-b-2 border-ink text-sm font-medium text-ink hover:border-ember hover:text-ember"
                >
                  {s.secondaryCta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
