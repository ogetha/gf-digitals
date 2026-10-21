"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-72 border border-line bg-paper p-5 shadow-none">
          <p className="text-sm font-medium text-ink">Chat with GF Digitals</p>
          <p className="mt-2 text-sm text-charcoal/70">
            Questions about what your brand needs? Send us a message.
          </p>
          <a
            href="mailto:hello@gfdigitals.com"
            className="mt-4 inline-block border-b border-ink text-sm text-ink hover:border-gold hover:text-gold"
          >
            hello@gfdigitals.com
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center border-2 border-ink bg-gold text-ink shadow-[4px_4px_0_0_#0A0A0A] hover:bg-ember"
      >
        {open ? "✕" : "Chat"}
      </button>
    </div>
  );
}
