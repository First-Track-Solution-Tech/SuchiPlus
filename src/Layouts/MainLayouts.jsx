import react from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import BottomNav from "../component/ButtomNav";
import Footer from "../component/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
};

export default MainLayout;
