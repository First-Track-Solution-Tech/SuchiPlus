import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./Pages/TVShows";
import Downloads from "./Pages/Downloads";
import Account from "./Pages/Account";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import MainLayout from "./Layouts/MainLayouts";
import Search from "./Pages/Search";

import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import HelpCenter from "./Pages/HelpCenter";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolice";
import CookiesPolicy from "./Pages/CookiePolicy";
import GetStarted from "./Pages/GetStarted";
import "./index.css";
import "./App.css";
function App() {
  return (
    <div className="bg-black text-white">

      <Routes>
        <Route path="/" element={<MainLayout />}>    
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Account" element={< Account/>}/>
      

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
        <Route path="/GetStarted" element={<GetStarted />} />

       </Route>  
       </Routes>
      

    </div>
  );
}

export default App;
