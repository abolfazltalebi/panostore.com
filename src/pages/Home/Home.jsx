import { Link } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import WhySection from "./WhySection/WhySection";
import BestProduct from "./BestProduct/BestProduct";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <BestProduct />
    </>
  );
}
