import { Fallow } from "../../constanst/FooterItem";
import { Link } from "react-router-dom";

export default function FooterFollowUs() {
  return (
    <div className="space-y-4">
      <h2 className="font-medium capitalize text-lg">Follow us</h2>
      <div className="flex flex-col gap-4 relative">
        {Fallow.map((Fitem) => {
          return (
            <Link
              to={Fitem.src}
              className="text-sm transition-all duration-75 py-1 relative group inline-flex items-center gap-2"
              key={Fitem.id}
            >
              {Fitem.icon}
              {Fitem.name}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 bg-[#ED952B] w-0 h-[0.1rem] rounded transition-all duration-300 ease-in-out delay-100 group-hover:w-full"></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
