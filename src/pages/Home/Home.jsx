import BestProduct from "./BestProduct/BestProduct";
import Experiences from "./Experiences/Experiences";
import HeroSection from "./HeroSection/HeroSection";
import Materials from "./Materials/Materials";
import WhySection from "./WhySection/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <BestProduct />
      <Experiences />
      <Materials />
    </>
  );
}
