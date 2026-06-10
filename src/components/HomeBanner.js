import React, { useEffect, useState } from "react";
import "./HomeBanner.css";

import bannerVideo from "../assets/video/Khasiyat-video.mp4";

/* SLIDER CONTENT */
const bannerData = [
  {
    heading: ["WELCOME TO KHAASIYAT"],
    subheading:
      "One of Pahalgam's Most Loved Pure Veg Restaurants,Multi-cuisine vegetarian dining, scenic views, warm hospitality, and flavours worth coming back for."
  },

  {
    heading: ["WHERE GREAT FOOD MEETS", " SCENIC VIEWS"],
    subheading:
      "A Multi-Cuisine Dining Experience In Pahalgam,North Indian, South Indian, Chinese, Jain specialties, and signature creations served with care.",
  },

  {
    heading: ["SERVING MEMORIES WITH", "EVERY MEAL"],
    subheading:
      "PURE VEGETARIAN DINING IN THE HEART OF PAHALGAM,Freshly prepared dishes, comforting flavours, and a dining experience designed for families, travellers, and food lovers.",
  
  },
  
];

const HomeBanner = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  /* AUTO SLIDE */
  useEffect(() => {

    const interval = setInterval(() => {

      setAnimate(false);

      setTimeout(() => {

        setActiveIndex((prev) =>
          prev === bannerData.length - 1 ? 0 : prev + 1
        );

        setAnimate(true);

      }, 200);

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  const current = bannerData[activeIndex];

  return (
    <section className="homebanner">

      {/* FULLSCREEN VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="bg-video"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="banner-content">

        <span className="discount">
          WELCOME TO KHAASIYAT
        </span>

        {/* ANIMATED HEADING */}
        <h1 className={animate ? "showText" : ""}>
  {current.heading.map((line, index) => (
    <div
      key={index}
      className="heading-line"
      style={{
        animationDelay: `${index * 0.25}s`,
        display: "block",
      }}
    >
      {line}
    </div>
  ))}
</h1>
        {/* ANIMATED SUBHEADING */}
        <p className={animate ? "showPara" : ""}>
          {current.subheading}
        </p>

        {/* BUTTONS */}
        <div className="banner-btns">

         <a href="tel:++919103358985">
  <button className="primary-btn">
    Book a Table
  </button>
</a>

        <button
  className="secondary-btn"
  onClick={() => {
    const section = document.getElementById("menu");
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
>
  Explore Menu
</button>

        </div>

      </div>

    </section>
  );
};

export default HomeBanner;