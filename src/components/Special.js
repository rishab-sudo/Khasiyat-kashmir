import React from "react";
import "./Special.css";

const specialCards = [
  {
    image: require("../assets/food/north-ffod.png"),
    title: "North Indian Delicacies",
    description: "Rich flavours, comforting curries, and authentic vegetarian favourites.",
  },
  {
      image: require("../assets/food/food-south.png"),
    title: "South Indian Cuisine",
    description: "Freshly prepared dosas, idlis, and comforting South Indian classics.",
  },
      {
      image: require("../assets/food/food-tandoor.png"),
    title: "Tandoor Specials",
    description: "Perfectly grilled vegetarian delights prepared with authentic taste.",
  },
  {
      image: require("../assets/food/food-chinease.png"),
    title: "Chinese & Sizzlers",
    description: "Flavour-packed noodles, gravies, and signature sizzling creations.",
  },

    {
      image: require("../assets/food/food-jain.png"),
    title: "Jain Food Options",
    description: "Thoughtfully prepared Jain dishes crafted with care and purity.",
  },
];

function Special() {
  return (
    <section className="special">
      <div className="container ">

        {/* TOP CONTENT */}
        <div className="special-top">
          <span className="special-tag">
         Explore Our Specialties
          </span>

          <h2 className="special-heading">
          Enjoy Delicious Dining Amid Stunning Scenic Views

          </h2>
        </div>

        {/* FIRST ROW */}
        <div className="row special-row-one">
          {specialCards.slice(0, 2).map((card, index) => (
            <div className="col-lg-6 col-md-6 col-12 mb-4" key={index}>
              <div className="special-card special-card-large">
                
                <img
                  src={card.image}
                  alt={card.title}
                  className="special-card-image"
                />

                <div className="special-overlay"></div>

                <div className="special-card-content">
                  <h3 className="special-card-title">
                    {card.title}
                  </h3>

                  <p className="special-card-description">
                    {card.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SECOND ROW */}
        <div className="row">
          {specialCards.slice(2, 5).map((card, index) => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
              <div className="special-card">

                <img
                  src={card.image}
                  alt={card.title}
                  className="special-card-image"
                />

                <div className="special-overlay"></div>

                <div className="special-card-content">
                  <h3 className="special-card-title">
                    {card.title}
                  </h3>

                  <p className="special-card-description">
                    {card.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Special;