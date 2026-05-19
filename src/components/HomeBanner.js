import React, { useEffect, useState } from "react";
import "./HomeBanner.css";

import bannerVideo from "../assets/video/Khasiyat-video.mp4";

/* SLIDER CONTENT */
const bannerData = [
 {
  heading: ["Taste The Soul", "Of Kashmir"],
  subheading:
    "Experience authentic pure vegetarian delicacies crafted with Kashmiri warmth, rich flavours, and unforgettable hospitality in the heart of Pahalgam.",
},

{
  heading: ["Fresh Ingredients", "Authentic Flavours"],
  subheading:
    "From traditional Kashmiri recipes to comforting favourites, every dish is freshly prepared to give you a truly satisfying dining experience.",
},

{
  heading: ["More Than Food", "A Khaasiyat Experience"],
  subheading:
    "Surrounded by the beauty of Kashmir, enjoy delicious pure veg cuisine, peaceful ambience, and moments that make every visit special.",
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

          <button className="primary-btn">
            Book a Table
          </button>

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