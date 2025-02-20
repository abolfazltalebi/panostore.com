import heroBackground from "@/assets/images/background.webp";
import { motion } from "framer-motion";

export default function HeroSectionImage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img loading="lazy" src={heroBackground} className="rounded-3xl" alt="" />
    </motion.div>
  );
}
