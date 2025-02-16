import FooterContact from "./FooterContact";
import FooterDescriptiojn from "./FooterDescriptiojn";
import FooterFollowUs from "./FooterFollowUs";
import FooterLogo from "./FooterLogo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterText from "./FooterText";

export default function Footer() {
  return (
    <footer className="bg-[#fdf9ed] py-12">
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-8 ">
        <FooterLogo />
        <FooterContact />
        <FooterQuickLinks />
        <FooterFollowUs />
        <FooterText />
      </div>
      <FooterDescriptiojn />
    </footer>
  );
}
