import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BestProductCard({ image, name, price, rating }) {
  return (
    <motion.div
      className="rounded-2xl group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={name} className="w-full object-cover" />
      <div className="space-y-4 p-4 bg-white rounded-b-2xl">
        <h3 className="sm:text-lg font-semibold">{name}</h3>
        <p className="text-yellow-500 flex items-center gap-1">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold">{price}</span>
          <motion.button
            className="bg-[#0D1B39] text-white p-2 rounded-full flex items-center justify-center transition-all duration-300 "
            whileHover={{ scale: 1.2, rotate: 30 }}
            whileTap={{ scale: 0.9 }}
            aria-label="buy product"
          >
            <FaPlus />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
