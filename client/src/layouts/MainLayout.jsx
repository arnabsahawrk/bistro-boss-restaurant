import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/common/Nav/Nav";
import Footer from "../components/common/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("signIn");
  return (
    <main className="text-pretty">
      {noHeaderFooter || <Nav />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </main>
  );
};

export default MainLayout;
