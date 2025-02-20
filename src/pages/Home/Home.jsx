import BestProduct from "./BestProduct/BestProduct";
import Experiences from "./Experiences/Experiences";
import HeroSection from "./HeroSection/HeroSection";
import Materials from "./Materials/Materials";
import Testimonials from "./Testimonials/Testimonials";
import WhySection from "./WhySection/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <BestProduct />
      <Experiences />
      <Materials />
      <Testimonials />
    </>
  );
}
