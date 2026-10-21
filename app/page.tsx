import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AcademyTeaser from "@/components/AcademyTeaser";
import FounderTeaser from "@/components/FounderTeaser";
import Approach from "@/components/Approach";
import Freebie from "@/components/Freebie";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <AcademyTeaser />
      <FounderTeaser />
      <Approach />
      <Testimonials />
      <Freebie />
      <FinalCTA />
      <ExitIntentPopup />
    </main>
  );
}
