import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExperiencesCaption() {
  return (
    <div className="space-y-2 px-10">
      <p className="font-bold uppercase text-[#E58411] text-xs">experiences</p>
      <h2 className="text-xl sm:text-2xl md:text-4xl">
        we provide you the best experience
      </h2>
      <p className="text-justify break-all text-gray-500 text-sm sm:text-base font-medium">
        You don’t have to worry about the result because all of these interiors
        are made by people who are professionals in their fields with an elegant
        and lucurious style and with premium quality materials
      </p>
      <Link
        to="/"
        className="text-[#e58611ea] capitalize decoration-1  items-center gap-2 border-b inline-flex py-2  transition-all duration-300  hover:px-6 "
      >
        more info
        <FaArrowRight />
      </Link>
    </div>
  );
}
