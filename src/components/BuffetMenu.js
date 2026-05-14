import React, { useState } from "react";
import "./BuffetMenu.css";
import { X, Eye } from "lucide-react";

const buffetData = [
  {
    title: "Silver Pack",
    price: "₹350 / Pax",
    image: require("../assets/food/food1.jpeg"),
    items: [
      "1 Paneer Veg",
      "1 Dal",
      "1 Rice",
      "1 Type of Bread",
      "Green Salad",
      "Raita",
      "1 Dessert",
      "Water",
    ],
  },
  {
    title: "Gold Pack",
    price: "₹450 / Pax",
    image: require("../assets/food/food2.jpeg"),
    items: [
      "1 Chinese Starter",
      "1 Paneer Veg",
      "1 Dry Veg",
      "1 Dal",
      "1 Rice",
      "2 Types of Bread",
      "Green Salad",
      "Raita",
      "1 Dessert",
      "Water",
    ],
  },
  {
    title: "Diamond Pack",
    price: "₹550 / Pax",
    image: require("../assets/food/food3.jpeg"),
    items: [
      "1 Welcome Drink / Soup",
      "1 Chinese Starter",
      "1 South Indian Starter",
      "1 Paneer Veg",
      "1 Mix Veg",
      "1 Dal",
      "2 Types of Rice",
      "4 Types of Bread",
      "Green Salad",
      "Raita",
      "2 Types of Desserts",
      "Water",
    ],
  },
];

const BuffetMenu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="buffet-menu">
      <div className="container">

        {/* HEADING */}
        <div className="buffet-menu-heading">
  <span className="heading-tag">
    PURE VEG BUFFET IN PAHALGAM
  </span>

  <h2 className="page-heading">
    Unlimited Buffet Experience
  </h2>

  <p className="page-subheading">
    Indulge in a lavish multi-cuisine pure vegetarian buffet featuring authentic
    Kashmiri flavours, North Indian favourites, and freshly prepared delicacies
    served with warmth and hospitality at Khaasiyat, Pahalgam.
  </p>
</div>

        {/* CARDS */}
        <div className="buffet-menu-cards">

          {buffetData.map((item, index) => (
            <div
              className="buffet-menu-card"
              key={index}
              onClick={() => setSelected(item)}
            >

              {/* IMAGE */}
              <div className="buffet-menu-image">

                <img src={item.image} alt={item.title} />

                {/* OVERLAY */}
                <div className="buffet-menu-overlay">

                 <h3>{item.title}</h3>

<div className="view-menu-btn">
  <span>View Menu</span>
  <Eye size={22} />
</div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* POPUP */}
        {selected && (
          <div
            className="buffet-popup-overlay"
            onClick={() => setSelected(null)}
          >

            <div
              className="buffet-popup"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE */}
              <button
                className="buffet-popup-close"
                onClick={() => setSelected(null)}
              >
                <X size={24} />
              </button>

              {/* TITLE */}
              <h2>{selected.title}</h2>

              <div className="popup-line"></div>

              {/* LIST */}
              <div className="buffet-popup-list">

                {selected.items.map((list, i) => (
                  <div key={i} className="buffet-popup-item">
                    {list}
                  </div>
                ))}

              </div>

              {/* PRICE */}
              <div className="buffet-popup-price-box">
                <span>Total Price</span>
                <h3>{selected.price}</h3>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default BuffetMenu;