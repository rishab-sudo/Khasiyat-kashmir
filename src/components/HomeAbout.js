import React, { useState, useEffect } from "react";
import "./HomeAbout.css";

const images = [
  require("../assets/cafe/khasiyat front1.jpeg"),
  require("../assets/cafe/khasiyat front2.jpeg"),
  require("../assets/cafe/khasiyat front3.jpeg"),
  require("../assets/cafe/khasiyat front4.jpeg"),
  require("../assets/cafe/khasiyat front5.jpeg"),
  require("../assets/cafe/khasiyat front6.jpeg"),
  require("../assets/cafe/khasiyat front7.jpeg"),
];

const HomeAbout = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500); // ⬅️ match with animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="homeabout">
      <div className="homeabout-container">

        {/* LEFT IMAGE */}
        <div className="homeabout-left">
          <div className="image-wrapper">
            <img
              key={current} /* 🔥 important for re-animation */
              src={images[current]}
              alt="restaurant"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="homeabout-right">
          <span className="tag">FRESH & TASTY FOOD</span>

          <h2 className="title">
            A Sophisticated and <br /> Traditional Cuisine
          </h2>

          <p className="desc">
            Rosoi is one of the most popular restaurants with a unique and
            special menu crafted by our passionate chefs.
          </p>

          <p className="contact">
            Call for Reservation <strong>+01234 567 891</strong>
          </p>

          <button className="menu-btn book-btn">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;