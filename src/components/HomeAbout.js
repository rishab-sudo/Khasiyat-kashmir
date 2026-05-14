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
  <span className="tag heading-tag">
    PURE VEG RESTAURANT IN PAHALGAM
  </span>

  <h2 className="title page-heading">
    Authentic Kashmiri Flavours <br /> Served With Warm Hospitality
  </h2>

  <p className="desc page-description">
    Welcome to Khaasiyat, a premium pure vegetarian restaurant in Pahalgam,
    Kashmir, where traditional Kashmiri taste meets modern dining. From rich
    North Indian delicacies to authentic local flavours, every dish is freshly
    prepared using quality ingredients and crafted with passion by our expert
    chefs.
  </p>

  <p className="contact">
    Reserve Your Table <strong>+91 XXXXX XXXXX</strong>
  </p>

  <button className="menu-btn book-btn">
    Explore Our Menu
  </button>
</div>

      </div>
    </section>
  );
};

export default HomeAbout;