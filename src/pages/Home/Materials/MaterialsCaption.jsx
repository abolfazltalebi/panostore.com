import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MaterialsCaption() {
  return (
    <div className="space-y-2 ">
      <p className="font-bold uppercase text-[#E58411] text-xs">Materials</p>
      <h2 className="text-xl sm:text-2xl md:text-4xl">
        Very serious materials for making furniture
      </h2>
      <p className="text-justify break-all text-gray-500 text-sm sm:text-base font-medium">
        Because panto was very serious about designing furniture for our
        environment, using a very expensive and famous capital but at a
        relatively low price{" "}
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
