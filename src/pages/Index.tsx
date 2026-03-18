import Navbar from "@/components/landing/Navbar";
import ScrollHero from "@/components/landing/ScrollHero";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AboutSection from "@/components/landing/AboutSection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import Footer from "@/components/landing/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => (
  <LanguageProvider>
    <div className="min-h-screen">
      <Navbar />
      <ScrollHero />
      <ProblemSection />
      <HowItWorksSection />
      <AboutSection />
      <WaitlistSection />
      <Footer />
    </div>
  </LanguageProvider>
);

export default Index;
