# GF Digitals — Website (Next.js)

A starting build for GF Digitals: one converting homepage plus two
secondary pages (Meet the Founder, Academy). Everything marked
`[PLACEHOLDER]` is safe demo text/links meant for you to replace.

## Running it locally

You'll need [Node.js](https://nodejs.org) installed (v18 or later).

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. Changes to any file
save and reload automatically.

## Where everything lives

- `app/page.tsx` — the homepage, assembled from the section components below
- `app/founder/page.tsx` — the "Meet the Founder" page
- `app/academy/page.tsx` — the Academy page (stub — expand later)
- `components/Hero.tsx` — headline, subheadline, first CTA, abstract graphic
- `components/About.tsx` — brief company-level trust section
- `components/Services.tsx` — the 4 service cards (edit the `services` array at the top)
- `components/Freebie.tsx` — the "book a free fit call" + email capture section
- `components/Testimonials.tsx` — testimonial cards (edit the `testimonials` array)
- `components/FinalCTA.tsx` — closing call to action
- `components/Footer.tsx` — email, social links, nav
- `components/ChatWidget.tsx` — the floating chat bubble (bottom right)
- `components/ExitIntentPopup.tsx` — the "before you go" email popup

## What you need to replace before launch

1. **Email address** — currently `hello@gfdigitals.com` placeholder in
   `Footer.tsx` and `ChatWidget.tsx`.
2. **Booking link** — the "Book a free fit call" buttons link to `#` right
   now. Once you set up a booking tool (Calendly or similar), replace the
   `href="#"` in `Hero.tsx`, `Freebie.tsx`, `FinalCTA.tsx`, and
   `app/founder/page.tsx`.
3. **Email capture forms** — the forms in `Freebie.tsx` and
   `ExitIntentPopup.tsx` don't send anywhere yet. Connect them to an email
   tool (Mailchimp, ConvertKit, Beehiiv, etc. all have simple form-embed or
   API instructions) by updating the `action` attribute or swapping in
   their embed code.
4. **Chat widget** — `ChatWidget.tsx` is a simple placeholder. If you want
   a real live-chat tool (Crisp, Tawk.to, WhatsApp Business widget), you
   can either replace this component's contents or add their script to
   `app/layout.tsx`.
5. **Social links** — currently `#` placeholders in `Footer.tsx`.
6. **All `[PLACEHOLDER]` copy** — every section has placeholder text
   flagged for you to replace with real, conversion-focused copy.
7. **Testimonials** — replace the 3 placeholder quotes in
   `Testimonials.tsx` as real ones come in; add more by adding objects to
   the array.

## Adding more pages later

This project structure supports it natively — to add a new page, create a
new folder under `app/` with a `page.tsx` file inside (e.g.
`app/services/page.tsx` for a dedicated services page), then link to it
from `Header.tsx` and `Footer.tsx`.

## Deploying

The simplest option is [Vercel](https://vercel.com) (made by the creators
of Next.js) — connect your GitHub repo and it deploys automatically. Once
you have a domain, you can point it at the Vercel deployment.
