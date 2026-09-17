export default function Freebie() {
  return (
    <section id="book" className="border-y border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl text-paper">
              Not sure if we&apos;re the right fit?
            </h2>
            <p className="mt-4 max-w-sm text-paper/75">
              [PLACEHOLDER] Book a free 10-minute call — no pressure, just a
              clear read on whether GF Digitals is right for your brand.
            </p>
            {/* Replace href with your real booking link (e.g. Calendly) */}
            <a
              href="#"
              className="mt-7 inline-block border border-gold bg-gold px-6 py-3 text-sm font-medium text-ink hover:bg-transparent hover:text-gold"
            >
              Book your free fit call
            </a>
          </div>

          <div className="border border-paper/20 p-8">
            <h3 className="text-lg text-paper">
              Not ready to book? Get our free resources instead.
            </h3>
            <p className="mt-2 text-sm text-paper/70">
              [PLACEHOLDER] Leave your email and we&apos;ll send occasional
              freebies, plus a follow-up if it looks like a fit.
            </p>
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
                placeholder="you@brand.com"
                className="w-full flex-1 border border-paper/30 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus-visible:outline-gold"
              />
              <button
                type="submit"
                className="border border-paper px-5 py-3 text-sm font-medium text-paper hover:border-gold hover:text-gold"
              >
                Get freebies
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
