import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // ✅ SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close sidebar on click
    }
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className={`navbar ${showNav ? "show" : ""}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">

          <div className="navbar-logo">
            <img src={require("../assets/khasiyat-logo.png")} alt="logo" />
          </div>

          <div className="navbar-links">
            <span className="links" onClick={() => scrollToSection("home")}>Home</span>
            <span className="links" onClick={() => scrollToSection("menu")}>Menu</span>
            <span className="links" onClick={() => scrollToSection("review")}>Review</span>
            <span className="links" onClick={() => scrollToSection("contact")}>Get in Touch</span>

          

            {/* ✅ SOCIAL ICONS */}
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="navbar-menu" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </div>

        </Container>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="sidebar-logo">
          <img src={require("../assets/khasiyat-logo.png")} alt="sidebar-logo"/>
        </div>

        <span className="links" onClick={() => scrollToSection("home")}>Home</span>
        <span className="links" onClick={() => scrollToSection("menu")}>Menu</span>
        <span className="links" onClick={() => scrollToSection("review")}>Review</span>
        <span className="links" onClick={() => scrollToSection("contact")}>Get in Touch</span>

       
        {/* ✅ SOCIAL ICONS SIDEBAR */}
        <div className="social-icons sidebar-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;