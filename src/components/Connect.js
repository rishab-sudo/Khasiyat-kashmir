import React from "react";
import "./Connect.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Connect = () => {
  return (
    <section className="connect">
      <div className="container-fluid g-0">
        <div className="connect-row">

          {/* LEFT IMAGE */}
          <div className="connect-left">
            <img src={require("../assets/connect.jpg")} alt="Newsletter" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="connect-right">

            <div className="connect-heading">
              <h5>NEWSLETTER</h5>
              <h2>Subscribe our Newsletter</h2>
              <p>
                To get latest updates, offers and promotions
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="connect-social">
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

            {/* CALL */}
            <div className="connect-call">
              Call for Reservation <strong>+91  91033 58985</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Connect;