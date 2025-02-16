import HeaderFristLogo from "./HeaderFristLogo";
import HeaderLastLogo from "./HeaderLastLogo";
import HeaderLogo from "./HeaderLogo";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className="container mt-4 bg-[#e58611ea] text-white p-4 rounded-full px-8 flex items-center justify-between">
      <HeaderLastLogo />
      <HeaderLogo />
      <HeaderFristLogo />
      <HeaderMobile/>
    </header>
  );
}
