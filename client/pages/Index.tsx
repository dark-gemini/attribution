import Hero from "../components/Hero";
import Features from "../components/Features";
import TeamSection from "../components/TeamSection";
import TechShowcase from "../components/TechShowcase";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <TechShowcase />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}
