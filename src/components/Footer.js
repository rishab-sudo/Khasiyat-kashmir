import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 - LOGO + DESC */}
        <div className="footer-col">
          <img
            src={require("../assets/khasiyat-logo.png")}
            className="footer-logo"
            alt="logo"
          />

          <p className="footer-desc">
            A perfect blend of taste and ambience. We serve delicious food
            with a warm and premium dining experience.
          </p>

          <div className="footer-social">
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

        {/* COLUMN 2 - QUICK LINKS */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>

          <ul className="footer-links">
            <li>Home</li>
          <li>Menu</li>
            <li>Reservation</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* COLUMN 3 - ADDRESS */}
        <div className="footer-col">
          <h4 className="footer-title">Address</h4>

          <p className="footer-address">
            21 Maneuvers Restaurant <br />
            Delhi, India <br />
            +91 91033 58985
          </p>
        </div>

        {/* COLUMN 4 - MAP */}
        <div className="footer-col">
          <h4 className="footer-title">Location</h4>

          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="map"
            ></iframe>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 Khasiyat. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;