import React, { useState } from "react";
import "./HomeMenu.css";
import menuImg from "../assets/menu.jpg";

const menuData = {
  Breakfast: {
    image: menuImg,
    reverse: true,
    items: [
      { name: "Grill Salmon", price: "$27.85", tag: "RECOMMENDED", desc: "Soft and juicy, with garlic & ginger" },
      { name: "Summertime Pesto Pasta", price: "$20.00", desc: "Soft and juicy, with garlic & ginger" },
    ],
  },

  Brunch: {
    image: menuImg,
    reverse: false,
    items: [
      { name: "Pan Fried Barramundi", price: "$27.85", desc: "Soft and juicy, with garlic & ginger" },
    ],
  },

  Lunch: {
    image: menuImg,
    reverse: true,
    items: [
      { name: "Cassonut Salad", price: "$16.85", tag: "CHEF CHOICE", desc: "Tomato, Salt, Black Pepper, Lemon" },
    ],
  },

  Snacks: {
    image: menuImg,
    reverse: false,
    items: [
      { name: "French Fries", price: "$5.00", desc: "Crispy golden fries" },
    ],
  },

  Dinner: {
    image: menuImg,
    reverse: true,
    items: [
      { name: "BBQ ribs", price: "$10.20", desc: "Chicken ribs, garlic & ginger, green sauce" },
    ],
  },
};

const HomeMenu = () => {
  const [active, setActive] = useState("Breakfast");

  const current = menuData[active];
  const categories = Object.keys(menuData);

  return (
    <section className="HomeMenu">

      {/* HEADER */}
      <div className="HomeMenu-header">
        <span>OUR MENU</span>
        <h2>Delicious Food</h2>

        {/* BUTTONS */}
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

      {/* ACTIVE SECTION */}
      <div className={`HomeMenu-section ${current.reverse ? "reverse" : ""}`}>

        {/* IMAGE */}
        <div className="HomeMenu-image">
          <img src={current.image} alt={active} />
        </div>

        {/* CONTENT */}
        <div className="HomeMenu-list">
          <h3 className="HomeMenu-title">{active}</h3>

          {current.items.map((item, i) => (
            <div key={i} className="HomeMenu-item">
              <div className="HomeMenu-top">
                <h4>
                  {item.name}
                  {item.tag && <span className="HomeMenu-tag">{item.tag}</span>}
                </h4>

                <div className="HomeMenu-dots"></div>
                <span className="HomeMenu-price">{item.price}</span>
              </div>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeMenu;