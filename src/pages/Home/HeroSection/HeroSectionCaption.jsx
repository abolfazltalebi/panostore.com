import { motion } from "framer-motion";

export default function HeroSectionCaption() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10 }}
      animate={{ opacity: 1, translateX: 1 }}
      transition={{ duration: 0.5 }}
      className="  bg-white/50 backdrop-blur-md p-4 rounded-full space-y-4"
    >
      <h2 className="text-xl sm:text-2xl md:text-4xl text-center font-bold">
        Make your interior more minimalistic & modern
      </h2>
      <p className="text-center text-sm text-gray-800 sm:text-md">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <div className="flex items-center justify-center">
        <button className="bg-[#B25E2E] text-white py-2 px-4 rounded-full m-auto">
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
