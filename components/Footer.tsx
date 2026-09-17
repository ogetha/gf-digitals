export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg text-paper">GF Digitals</p>
          <p className="mt-1 text-sm">
            [PLACEHOLDER] hello@gfdigitals.com
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          <a href="/#services" className="hover:text-gold">
            Services
          </a>
          <a href="/academy" className="hover:text-gold">
            Academy
          </a>
          <a href="/founder" className="hover:text-gold">
            Meet the Founder
          </a>
        </nav>

        <div className="flex gap-5 text-sm">
          {/* Replace # with real social links */}
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">LinkedIn</a>
          <a href="#" className="hover:text-gold">X</a>
        </div>
      </div>

      <div className="border-t border-paper/10 px-6 py-5 text-center text-xs text-paper/40 md:px-10">
        © {new Date().getFullYear()} GF Digitals. All rights reserved.
      </div>
    </footer>
  );
}
