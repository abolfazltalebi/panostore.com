import HeroSectionCaption from "./HeroSectionCaption";
import HeroSectionImage from "./HeroSectionImage";

export default function HeroSection() {
  return (
    <section className="relative container grid grid-cols-1 sm:grid-cols-2 items-center">
      <HeroSectionImage />
      <HeroSectionCaption />
    </section>
  );
}
