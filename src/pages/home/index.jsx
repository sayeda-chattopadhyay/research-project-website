import HeroSection from "./herosection";
import SellingPointSection from "./sellingsection";
import AboutSection from "./aboutsection";
import NewsSection from "./newssection";
import PartnerSection from "./partner";
import ResearchSection from "./researchsection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SellingPointSection />
      <AboutSection />
      <ResearchSection />
      <NewsSection />
      <PartnerSection />
    </div>
  );
};

export default HomePage;
