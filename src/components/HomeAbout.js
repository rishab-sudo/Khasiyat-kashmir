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
  Where Every Meal Feels Like a Pause Worth Taking

  </h2>

  <p className="desc page-description">
 Nestled amidst the breathtaking beauty of Kashmir, Khaasiyat brings together comforting flavours, warm hospitality, and a thoughtfully curated pure vegetarian dining experience.
 </p>
 <p>From rich North Indian delicacies and authentic South Indian specialties to flavourful Chinese dishes, sizzling tandoor platters, Jain food options, and signature creations, every dish is crafted with care to satisfy every palate.
</p>
<p>Fresh ingredients. Soulful flavours. Cozy ambience.
At Khaasiyat, every table is served with warmth, authenticity, and memorable taste.</p>
  {/* <p className="contact">
    Reserve Your Table <strong>+91 91033 58985 | +91 91033 58905
</strong>
  </p> */}

<a href="tel:+9103358905">
  <button className="menu-btn book-btn">
    Call Now
  </button>
</a>
</div>

      </div>
    </section>
  );
};

export default HomeAbout;