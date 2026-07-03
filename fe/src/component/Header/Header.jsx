import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scroll" : ""}`}>
      <div className="logo">
        <span className="logo-blue">Drone</span>Planet
      </div>

      <nav className="navbar">
        <a href="#home">HOME</a>
        <a href="#collections">COLLECTIONS</a>
        <a href="#about">ABOUT US</a>
      </nav>
    </header>
  );
}

export default Header;