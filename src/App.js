import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Slider from "./components/Slider";
import "./App.css";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Footer from "./components/Footer";
import { Squash as Hamburger } from "hamburger-react";
import Menu from "./components/Menu";
import Maps from "./components/Maps";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    setY(window.scrollY);
  };
 
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <div>
      <div className="hamburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} color="red" />
      </div>
      {isOpen ? (
        <Menu setOpen={setOpen} />
      ) : (
        <div>
              <Header isOnTop={y} />
              <Banner />
              <Banner2 />
              <Slider />
              <Banner3 />
              <Maps />
              <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
