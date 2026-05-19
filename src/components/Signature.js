import React, { useEffect, useState } from "react";
import "./Signature.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const signatureImages = [
  require("../assets/food/food1.jpeg"),
  require("../assets/food/food2.jpeg"),
  require("../assets/food/food1.jpeg"),
];

const Signature = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // NEXT SLIDE
  const nextSlide = () => {
    setCurrentImage((prev) =>
      prev === signatureImages.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    setCurrentImage((prev) =>
      prev === 0 ? signatureImages.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="signature">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE SLIDER */}
      {/* LEFT IMAGE SLIDER */}
<div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
  <div className="signature-image-wrapper">

    {/* SLIDER TRACK */}
    <div
      className="signature-slider"
      style={{
        transform: `translateX(-${currentImage * 100}%)`,
      }}
    >
      {signatureImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`signature-${index}`}
          className="signature-image"
        />
      ))}
    </div>

    {/* LEFT ARROW */}
    <button
      className="signature-arrow signature-arrow-left"
      onClick={prevSlide}
    >
      <FaChevronLeft />
    </button>

    {/* RIGHT ARROW */}
    <button
      className="signature-arrow signature-arrow-right"
      onClick={nextSlide}
    >
      <FaChevronRight />
    </button>

    {/* DOTS */}
    <div className="signature-dots">
      {signatureImages.map((_, index) => (
        <span
          key={index}
          className={`signature-dot ${
            index === currentImage ? "active-dot" : ""
          }`}
          onClick={() => setCurrentImage(index)}
        />
      ))}
    </div>

  </div>
</div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="signature-content">

              {/* TAG */}
              <span className="signature-tag">
                Premium Restaurant Experience
              </span>

              {/* HEADING */}
              <h2 className="signature-heading">
                Enjoy Delicious Food With Elegant Ambience
              </h2>

              {/* PARAGRAPH 1 */}
              <p className="signature-text">
                Experience the perfect combination of authentic taste,
                fresh ingredients, and warm hospitality crafted to make
                every moment memorable for you and your loved ones.
              </p>

              {/* PARAGRAPH 2 */}
              <p className="signature-text">
                From family dinners to special celebrations, our chefs
                and staff are dedicated to delivering exceptional food
                and a luxurious dining experience every single time.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Signature;