import { Menu, X } from "lucide-react"; // آیکون‌های منو و بستن

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: 1, label: "Home", path: "/home" },
    { id: 2, label: "Pricing", path: "/pricing" },
    { id: 3, label: "Blog", path: "/blog" },
    { id: 4, label: "Testimonial", path: "/testimonial" },
    { id: 5, label: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <button onClick={toggleMenu} className="md:hidden p-2">
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-white/80   z-40"
          onClick={toggleMenu}
        />
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed top-0 right-0 w-64 h-full bg-[#fdf9ed] shadow-lg z-50 p-6 flex flex-col"
      >
        <button onClick={toggleMenu} className="self-end mb-4 bg-white size-10 flex items-center justify-center rounded-full">
          <X className="w-6 h-6" />
        </button>

        <nav>
          <ul className="space-y-4">
            {navLinks.map(({ id, label, path }) => (
              <li key={id}>
                <Link
                  to={path}
                  className="text-lg font-medium text-gray-700 hover:text-[#ed952b]"
                  onClick={toggleMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
