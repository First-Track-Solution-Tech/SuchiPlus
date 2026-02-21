import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/signin";
import Register from "./Pages/register";
import MainLayout from "./layouts/Mainlayouts";
import About from "./Pages/about";
import "./index.css";
import "./App.css";
import Search from "./Pages/Search";
function App() {
  return (
    <div className="bg-black text-white">

      <Routes>
        <Route path="/" element={<MainLayout />}>    
        <Route index element={<Home />} />
        <Route path="/Search" element={<Search />} />

        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" elemrnt={<About/>}/>

       </Route>  
       </Routes>
      

    </div>
  );
}

export default App;
