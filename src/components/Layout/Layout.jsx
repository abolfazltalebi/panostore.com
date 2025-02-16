import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="space-y-12 mt-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
