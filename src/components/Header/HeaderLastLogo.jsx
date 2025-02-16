import { Link } from "react-router-dom";
import { navLinksLeft } from "../../constanst/HeaderItems";

export default function HeaderLastLogo() {
  return (
    <div className="hidden md:inline">
      <ul className="flex items-center">
        {navLinksLeft.map(({ id, label, path }) => {
          return (
            <li className="hover-header" key={id}>
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
