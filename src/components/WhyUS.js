import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./WhyUs.css";

const whyUsCards = [
  {
    image: require("../assets/cafe/khasiyat front1.jpeg"),
    title: "Fresh Ingredients",
    description:
      "We use premium quality fresh ingredients for authentic taste.",
  },
  {
    image: require("../assets/cafe/khasiyat front1.jpeg"),
    title: "Luxury Ambience",
    description:
      "Elegant interiors and warm atmosphere for memorable dining.",
  },
  {
    image: require("../assets/cafe/khasiyat front1.jpeg"),
    title: "Expert Chefs",
    description:
      "Experienced chefs crafting delicious dishes with perfection.",
  },
  {
    image: require("../assets/cafe/khasiyat front1.jpeg"),
    title: "Premium Service",
    description:
      "Friendly staff delivering exceptional hospitality every time.",
  },
];

const WhyUS = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="whyUs">
      <div className="container">

        {/* TOP CONTENT */}
        <div className="whyUs-top">

          <span className="whyUs-tag">
            Why Choose Us
          </span>

          <h2 className="whyUs-heading">
            Creating Memorable Dining Experiences With
          </h2>

        </div>

        {/* SLIDER */}
        <div className="whyUs-desktop-slider">

          <Slider ref={sliderRef} {...settings}>

            {whyUsCards.map((card, index) => (
              <div key={index}>

                <div className="whyUs-card">

                  <img
                    src={card.image}
                    alt={card.title}
                    className="whyUs-card-image"
                  />

                  <div className="whyUs-overlay"></div>

                  <div className="whyUs-card-content">

                    <h3 className="whyUs-card-title">
                      {card.title}
                    </h3>

                    <p className="whyUs-card-description">
                      {card.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </Slider>

        </div>

        {/* BUTTONS */}
        <div className="whyUs-buttons">

          <button
            className="whyUs-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft />
          </button>

          <button
            className="whyUs-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default WhyUS;