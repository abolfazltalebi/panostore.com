import Button from "../Button";
import { Link } from "react-router-dom";
import { navLinksRight } from "../../constanst/HeaderItems";
import { IoBagHandle } from "react-icons/io5";
export default function HeaderFristLogo() {
  return (
    <div className="md:flex items-center gap-4 hidden">
      <ul className="flex items-center">
        {navLinksRight.map(({ id, label, path }) => {
          return (
            <li className="hover-header" key={id}>
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
      </ul>
      <button className="border border-white flex items-center justify-center gap-2 px-8 py-2 rounded-full hover-header ">
        <IoBagHandle />
        <span>0</span>
      </button>
    </div>
  );
}
