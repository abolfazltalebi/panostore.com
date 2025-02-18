import { Link } from "react-router-dom";

export default function WhySectionICard({ id, name, caption }) {
  return (
    <div
      className="space-y-4 border-2 border-dashed border-[#e58611ea] p-5 rounded-2xl transition-all duration-300 hover:scale-105"
      key={id}
    >
      <h3 className="font-bold text-lg sm:text-2xl">{name}</h3>
      <p className="text-gray-700 text-xs text-justify break-all">{caption}</p>
      <Link to="/" className="text-[#e58611ea] capitalize decoration-1">
        more info
      </Link>
    </div>
  );
}
