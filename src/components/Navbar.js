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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
   {/* NAVBAR */}
<div className={`navbar ${showNav ? "show" : ""}`}>
  <Container fluid className="navbar-inner">

    {/* LOGO */}
    <div className="navbar-logo">
      <img src={require("../assets/khasiyat-logo.png")} alt="logo" />
    </div>

    {/* RIGHT SIDE (LINKS + SOCIAL) */}
    <div className="navbar-right">

      <div className="navbar-links">
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("menu")}>Menu</span>
        <span onClick={() => scrollToSection("review")}>Review</span>
        <span onClick={() => scrollToSection("contact")}>Get in Touch</span>
      </div>

      <div className="navbar-social">
        <a href="https://www.instagram.com/khaasiyatpahalgam/"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61575212754670"><FaFacebookF /></a>
    <a
  href="https://wa.me/919103358985"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
      </div>

    </div>

    {/* MENU ICON */}
    <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? "✕" : "☰"}
    </div>

  </Container>
</div>

      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("menu")}>Menu</span>
        <span onClick={() => scrollToSection("review")}>Review</span>
        <span onClick={() => scrollToSection("contact")}>Get in Touch</span>

        <div className="sidebar-social">
          <a href="https://www.instagram.com/khaasiyatpahalgam/"><FaInstagram /></a>
          <a href="https://www.facebook.com/profile.php?id=61575212754670"><FaFacebookF /></a>
<a
  href="https://wa.me/919103358985"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;