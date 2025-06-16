import AboutKim from "./components/main/AboutKim";
import DentalKnowledgeSection from "./components/main/DentalKnowledgeSection";
import DifferentSection from "./components/main/DifferentSection";
import ExclusiveTechnologySection from "./components/main/ExclusiveTechnologySection";
import FeelingSection from "./components/main/FeelingSection";
import HeroSection from "./components/main/HeroSection";
import NewsSection from "./components/main/NewsSection";

export default function Home() {
  return (
    <div className="h-full">
      <AboutKim />
      {/* Different section */}
      <DifferentSection />
      {/* Feeling section */}
      <FeelingSection />
      {/* News section */}
      <NewsSection />
      {/* Exclusive technology section */}
      <ExclusiveTechnologySection />
      {/* Dental knowledge section */}
      <DentalKnowledgeSection />
    </div>
  );
}
