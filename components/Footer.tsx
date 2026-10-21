export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-forest text-sand/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg text-gold">GF Digitals</p>
          <p className="mt-1 text-sm italic">
            Creative thinking. Intelligent systems. Purposeful execution.
          </p>
          <p className="mt-1 text-sm">
            <a href="mailto:hello@gfdigitals.com" className="hover:text-gold">
              hello@gfdigitals.com
            </a>
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          <a href="/founder" className="hover:text-gold">
            About us
          </a>
          <a href="/#services" className="hover:text-gold">
            Services
          </a>
          <a href="/academy" className="hover:text-gold">
            Academy
          </a>
          <a href="/#resources" className="hover:text-gold">
            Resources
          </a>
          <a href="/#book" className="hover:text-gold">
            Contact
          </a>
        </nav>

        <div className="flex gap-5 text-sm">
          {/* Replace # with real social links */}
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">LinkedIn</a>
          <a href="#" className="hover:text-gold">X</a>
        </div>
      </div>

      <div className="border-t border-sand/15 px-6 py-5 text-center text-xs text-sand/50 md:px-10">
        © {new Date().getFullYear()} GF Digitals. All rights reserved.
      </div>
    </footer>
  );
}
