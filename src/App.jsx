import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/signin";
import Register from "./Pages/register";
import MainLayout from "./layouts/Mainlayouts";
import Search from "./Pages/Search";

import About from "./Pages/about";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import HelpCenter from "./Pages/HelpCenter";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolice";
import CookiesPolicy from "./Pages/CookiePolicy";
import "./index.css";
import "./App.css";
function App() {
  return (
    <div className="bg-black text-white">

      <Routes>
        <Route path="/" element={<MainLayout />}>    
        <Route index element={<Home />} />
        <Route path="/Search" element={<Search />} />

        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/CookiePolicy" element={<CookiesPolicy />} />

       </Route>  
       </Routes>
      

    </div>
  );
}

export default App;
