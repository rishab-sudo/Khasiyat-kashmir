import React from "react";
import "./Special.css";

const specialCards = [
  {
    image: require("../assets/food/food1.jpeg"),
    title: "Italian Pasta",
    description: "Freshly prepared creamy pasta with authentic flavors.",
  },
  {
    image: require("../assets/food/food1.jpeg"),
    title: "Delicious Burger",
    description: "Juicy grilled burger served with crispy fries.",
  },
  {
     image: require("../assets/food/food1.jpeg"),
    title: "Seafood Special",
    description: "Premium seafood platter crafted by expert chefs.",
  },
  {
    image: require("../assets/food/food1.jpeg"),
    title: "Classic Pizza",
    description: "Stone baked pizza topped with fresh ingredients.",
  },
  {
   image: require("../assets/food/food1.jpeg"),
    title: "Dessert Delight",
    description: "Sweet handcrafted desserts for every celebration.",
  },
];

function Special() {
  return (
    <section className="special">
      <div className="container">

        {/* TOP CONTENT */}
        <div className="special-top">
          <span className="special-tag">
            Our Special Menu
          </span>

          <h2 className="special-heading">
            Taste The Best Signature Dishes Crafted With Passion
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