import { Dribbble, Facebook, Linkedin, Twitter } from "lucide-react";

import { Link } from "react-router-dom";

export default function FooterDescription() {
  return (
    <div className="border-t-2 border-white py-5 flex items-center flex-wrap sm:flex-nowrap justify-between gap-4 w-full container">
      <div>
        <p className="text-sm">© 2025. All rights reserved.</p>
      </div>
      <div className="flex items-center text-xs gap-4">
        <Link>Terms & Conditions</Link>
        <Link>Privacy Policy</Link>
      </div>
    </div>
  );
}
