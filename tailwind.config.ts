import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",       // primary black
        paper: "#FFFFFF",      // primary white
        cream: "#F7F5F1",      // off-white section background, breathing room
        gold: "#C9A648",       // main accent
        ember: "#D9622B",      // secondary accent — used sparingly
        charcoal: "#1A1A1A",   // body copy on light backgrounds
        line: "#E4E1DA",       // hairline dividers
        forest: "#123D36",     // deep green — dark feature sections
        sand: "#F3E9D8",       // warm tint — hero, closing sections
        blush: "#F6D8C8",      // light ember tint
        mint: "#D3E5D8",       // light forest tint
        butter: "#F7E6A8",     // light gold tint
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
