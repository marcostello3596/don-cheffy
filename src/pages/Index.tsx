import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import ScrollHero from "@/components/landing/ScrollHero";
import AiRecipesSection from "@/components/landing/AiRecipesSection";
import ShoppingListSection from "@/components/landing/ShoppingListSection";
import FamilyAccountSection from "@/components/landing/FamilyAccountSection";
import NutritionSection from "@/components/landing/NutritionSection";
import ProblemSection from "@/components/landing/ProblemSection";
import PricingSection from "@/components/landing/PricingSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollHero />
      <AiRecipesSection />
      <ShoppingListSection />
      <FamilyAccountSection />
      <NutritionSection />
      <ProblemSection />
      <PricingSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

