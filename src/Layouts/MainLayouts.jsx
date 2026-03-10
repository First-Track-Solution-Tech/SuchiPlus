import react from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ButtonNav from "../component/ButtonNav";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
      <ButtonNav />
    </>
  );
};

export default MainLayout;
