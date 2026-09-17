import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          GF Digitals
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-charcoal md:flex">
          <Link href="/#services" className="hover:text-ink">
            Services
          </Link>
          <Link href="/academy" className="hover:text-ink">
            Academy
          </Link>
          <Link href="/founder" className="hover:text-ink">
            Meet the Founder
          </Link>
        </nav>

        <Link
          href="/#book"
          className="rounded-none border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-gold hover:border-gold hover:text-ink"
        >
          Book a free fit call
        </Link>
      </div>
    </header>
  );
}
