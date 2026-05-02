import React, { useState, useEffect } from "react";
import "./HomeMenu.css";

/* 🔥 11 IMAGES */
const foodImages = [
  require("../assets/food/food1.jpeg"),
  require("../assets/food/food2.jpeg"),
  require("../assets/food/food3.jpeg"),
  require("../assets/food/food4.jpeg"),
  require("../assets/food/food5.jpeg"),
  require("../assets/food/food6.jpeg"),
  require("../assets/food/food7.jpeg"),
  require("../assets/food/food8.jpeg"),
  require("../assets/food/food9.jpeg"),
  require("../assets/food/food10.jpeg"),
  require("../assets/food/food11.jpeg"),
];

const menuData = {
  Breakfast: { reverse: true },
  Brunch: { reverse: false },
  Lunch: { reverse: true },
  Snacks: { reverse: false },
  Dinner: { reverse: true },
};

const HomeMenu = () => {
  const [active, setActive] = useState("Breakfast");
  const [currentImg, setCurrentImg] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setCurrentImg(0);

    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % foodImages.length);
        setFade(true); // fade in next image
      }, 600); // fade duration

    }, 4000); // total duration

    return () => clearInterval(interval);
  }, [active]);

  const current = menuData[active];
  const categories = Object.keys(menuData);

  return (
    <section className="HomeMenu">
   {/* <div className="HomeMenu-bg"></div> */}
      {/* HEADER */}
      <div className="HomeMenu-header">
        <span>OUR MENU</span>
        <h2>Delicious Food</h2>

        <div className="HomeMenu-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? "active" : ""}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION */}
      <div className={`HomeMenu-section ${current.reverse ? "reverse" : ""}`}>

        {/* 🔥 IMAGE (SMOOTH) */}
      <div className="HomeMenu-image">
  <img
    key={currentImg}   // 🔥 THIS FIXES EVERYTHING
    src={foodImages[currentImg]}
    className={`menu-img ${fade ? "show" : ""}`}
    alt="food"
  />
</div>

        {/* CONTENT */}
        <div className="HomeMenu-list">
          <h3 className="HomeMenu-title">{active}</h3>

          <div className="HomeMenu-item">
            <div className="HomeMenu-top">
              <h4>Special Dish</h4>
              <div className="HomeMenu-dots"></div>
              <span className="HomeMenu-price">$20</span>
            </div>
            <p>Delicious freshly prepared dish with premium ingredients.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeMenu;