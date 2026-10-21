const numColors = ["bg-ember", "bg-gold", "bg-forest text-sand", "bg-mint", "bg-blush"];

const steps = [
  ["01", "Discover", "Understand your brand, business goals, audience and current digital challenges."],
  ["02", "Diagnose", "Identify gaps, opportunities and what needs attention."],
  ["03", "Strategise", "Develop a clear direction and practical execution plan."],
  ["04", "Execute", "Bring the strategy to life through content, management and intelligent systems."],
  ["05", "Optimise", "Review performance, refine the approach and improve what comes next."],
];

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <p className="text-sm font-medium uppercase tracking-wide text-ember">
        Our approach
      </p>
      <h2 className="mt-3 max-w-xl text-3xl">
        Every strong digital presence starts with the right questions.
      </h2>
      <p className="mt-3 max-w-xl text-charcoal/70">
        Before recommending another platform, campaign or automation tool, we
        examine the bigger picture.
      </p>

      <ol className="mt-12 grid gap-px overflow-hidden border-2 border-ink bg-ink md:grid-cols-5">
        {steps.map(([n, title, copy], i) => (
          <li key={n} className="relative bg-paper p-6">
            <p className={`inline-block px-2 py-0.5 text-sm font-medium text-ink ${numColors[i]}`}>{n}</p>
            <h3 className="mt-4 text-lg">{title}</h3>
            <p className="mt-2 text-sm text-charcoal/75">{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
