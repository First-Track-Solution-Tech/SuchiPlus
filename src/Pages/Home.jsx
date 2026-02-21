import react from "react";
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import TrendingSection from "../component/TrendingSection";
import FaqSection from "../component/FaqSection";
const Home = () => {
  return (
    <div>
        <Hero />
        <TrendingSection />
        <FaqSection />
    </div>
  );
};

export default Home;