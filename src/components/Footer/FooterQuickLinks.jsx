import { Link } from "react-router-dom";
import { Services } from "../../constanst/FooterItem";

export default function FooterQuickLinks() {
  return (
    <div className="space-y-4">
      <h2 className="font-medium capitalize text-lg">serviced</h2>
      <div className="flex flex-col gap-4">
        {Services.map((Qitem) => {
          return (
            <Link
              to={Qitem.src}
              className="text-sm transition-all duration-75 py-1 relative group"
              key={Qitem.id}
            >
              {Qitem.label}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 bg-[#ED952B] w-0 h-[0.1rem] rounded transition-all duration-300 ease-in-out delay-100 group-hover:w-full"></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
