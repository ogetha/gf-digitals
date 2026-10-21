"use client";

import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("gf-exit-popup-shown");
    if (alreadyShown) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("gf-exit-popup-shown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 px-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md border border-line bg-paper p-8">
        <button
          onClick={() => setShow(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-charcoal/50 hover:text-ink"
        >
          ✕
        </button>
        <h3 className="text-2xl text-ink">Before you go</h3>
        <p className="mt-3 text-sm text-charcoal/75">
          Get free guides, frameworks and ready-to-use resources from GF
          Digitals, sent to your inbox.
        </p>
        {/* Wire this up to your email provider */}
        <form className="mt-6 flex flex-col gap-3" action="#" method="POST">
          <label htmlFor="exit-email" className="sr-only">
            Email address
          </label>
          <input
            id="exit-email"
            name="email"
            type="email"
            required
            placeholder="you@brand.com"
            className="w-full border border-line px-4 py-3 text-sm focus-visible:outline-gold"
          />
          <button
            type="submit"
            className="border border-ink bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-gold hover:border-gold hover:text-ink"
          >
            Get free resources
          </button>
        </form>
      </div>
    </div>
  );
}
