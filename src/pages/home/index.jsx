import HeroSection from "./herosection";
import SellingPointSection from "./sellingsection";
import AboutSection from "./aboutsection";
import NewsSection from "./newssection";
import PartnerSection from "./partner";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SellingPointSection />
      <AboutSection />
      <NewsSection />
      <PartnerSection />
    </div>
  );
};

export default HomePage;
