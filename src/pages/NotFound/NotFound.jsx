import { Link } from "react-router-dom";
import notfound from "@/assets/images/404.webp";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col mb-6">
      <img src={notfound} alt="" className="px-12 md:px-0 md:w-1/2" />
      <Link
        to="/"
        className="capitalize border text-black px-8 py-3 rounded-full m-auto md:m-0 text-sm flex items-center gap-2 transition-all hover:px-12 hover:scale-105 duration-500"
      >
        back to home
      </Link>
    </div>
  );
}
