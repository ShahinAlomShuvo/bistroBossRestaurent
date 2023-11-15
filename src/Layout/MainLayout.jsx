import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLogInRoute =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {isLogInRoute || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogInRoute || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
