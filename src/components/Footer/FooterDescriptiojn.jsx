import {
  Dribbble,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function FooterDescriptiojn() {
  return (
    <div className="border-t-2 border-white py-5 flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-4 w-full container">
      <div>
        <p className="text-sm">© 2025. All rights reserved.</p>
      </div>
      <div className="flex items-center gap-4">
        <Twitter />
        <Linkedin />
        <Facebook />
        <Dribbble />
      </div>
    </div>
  );
}
