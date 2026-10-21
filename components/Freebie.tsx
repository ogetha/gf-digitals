export default function Freebie() {
  return (
    <section id="resources" className="bg-gold text-ink">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-ink/70">
              Free resources
            </p>
            <h2 className="mt-3 text-3xl text-ink">
              Practical guides, frameworks and tools. On us.
            </h2>
            <p className="mt-4 max-w-md text-ink/80">
              As a business owner building your brand or a digital professional
              sharpening your skills, access practical guides, strategic
              frameworks and ready-to-use resources curated to improve your
              workflows, sharpen execution and help you make smarter decisions.
            </p>
          </div>

          <div className="border-2 border-ink bg-sand p-8">
            <h3 className="text-lg text-ink">
              Get access to free resources and insights from GF Digitals.
            </h3>
            {/* Wire this up to your email provider (Mailchimp, ConvertKit, etc.) */}
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="#" method="POST">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full flex-1 border border-ink bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline-forest"
              />
              <button
                type="submit"
                className="border border-ink bg-forest px-5 py-3 text-sm font-medium text-sand hover:bg-ink"
              >
                Get free resources
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
