import React, { useEffect, useState } from "react";
import "./HomeBanner.css";

const texts = [
  {
    title: ["Delicious & Mouth", "Watering Taste"],
    subtitle: "Best food made by our Passionate Chefs",
  },
  {
    title: ["Fresh & Healthy", "Organic Food"],
    subtitle: "Prepared with love & premium ingredients",
  },
];

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % texts.length);
        setAnimate(true);
      }, 500); // reset animation before next

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = texts[activeIndex];

  return (
    <section className="homebanner">
      <div className="overlay">
        <div className="container">

          {/* LEFT */}
          <div className="banner-left">
            <span className={`discount ${animate ? "show" : ""}`}>
              GET 35% DISCOUNT
            </span>

            <h1 className="title">
              {current.title.map((line, i) => (
                <div
                  key={i}
                  className={`line ${animate ? "animate" : ""}`}
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {line}
                </div>
              ))}
            </h1>

            <p className={`subtitle ${animate ? "fadeUp" : ""}`}>
              {current.subtitle}
            </p>

            <button className="book-btn"> Book a Table </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`banner-right ${animate ? "imgShow" : ""}`}>
            <img src="/images/dish.png" alt="dish" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeBanner;