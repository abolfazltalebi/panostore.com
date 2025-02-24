import HeaderFristLogo from "./HeaderFristLogo";
import HeaderLastLogo from "./HeaderLastLogo";
import HeaderLogo from "./HeaderLogo";
import HeaderMobile from "./HeaderMobile";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      className="container mt-4 bg-[#B25E2E] text-white p-4 rounded-full px-8 flex items-center justify-between"
    >
      <HeaderLastLogo />
      <HeaderLogo />
      <HeaderFristLogo />
      <HeaderMobile />
    </motion.header>
  );
}
