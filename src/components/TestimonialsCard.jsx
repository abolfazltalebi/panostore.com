import { motion } from 'framer-motion';

export default function TestimonialsCard({
  background,
  name,
  job,
  caption,
  image,
}) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0,scale:0 }}
        animate={{ opacity: 1,scale:1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={background} alt="" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 flex flex-col items-center gap-2 rounded-3xl bg-white m-3 h-[150px]"
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0,scale:0 }}
        animate={{ opacity: 1,scale:1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image}
          className="absolute -top-8 bg-white rounded-t-full p-2"
          alt={name}
        />
        <div className="mt-6 flex flex-col items-center gap-2 p-4">
          <h3>{name}</h3>
          <p className="text-xs text-gray-500">{job}</p>
          <blockquote className="text-xs text-justify break-all">
            {caption}
          </blockquote>
        </div>
      </motion.div>
    </div>
  );
}
