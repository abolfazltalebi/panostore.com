import { Link } from "react-router-dom";

export default function WhySectionICard({ id, name, caption }) {
  return (
    <div className="space-y-4" key={id}>
      <h3 className="font-bold text-2xl">{name}</h3>
      <p className="text-gray-700 text-xs text-justify break-all">{caption}</p>
      <Link to="/" className="text-[#e58611ea] capitalize decoration-1">
        more info
      </Link>
    </div>
  );
}
