import FooterContact from "./FooterContact";
import FooterDescription from "./FooterDescription";
import FooterFollowUs from "./FooterFollowUs";
import FooterLogo from "./FooterLogo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterText from "./FooterText";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7F7F7] py-12"
    >
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 p-8 ">
        <FooterLogo />
        <FooterContact />
        <FooterQuickLinks />
        <FooterFollowUs />
        <FooterText />
      </div>
      <FooterDescription />
    </motion.footer>
  );
}
