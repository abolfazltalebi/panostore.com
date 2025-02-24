import { Link } from "react-router-dom";

export default function WhySectionICard({ id, name, caption }) {
  return (
    <div
      className="space-y-4 border-2 border-dashed border-[#B25E2E] p-5 rounded-2xl transition-all duration-300 hover:scale-105"
      key={id}
    >
      <h3 className="font-bold text-lg sm:text-2xl">{name}</h3>
      <p className="text-gray-700 text-xs text-justify break-all">{caption}</p>
      <Link to="/" className="text-[#B25E2E] capitalize decoration-1">
        more info
      </Link>
    </div>
  );
}
