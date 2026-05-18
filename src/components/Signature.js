import React, { useEffect, useState } from "react";
import "./Signature.css";

const signatureImages = [
  require("../assets/food/food1.jpeg"),
require("../assets/food/food1.jpeg"),
require("../assets/food/food1.jpeg"),
];

const Signature = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto Slide Images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === signatureImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="signature">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT IMAGE SLIDER */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="signature-image-wrapper">
              {signatureImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`signature-${index}`}
                  className={`signature-image ${
                    index === currentImage
                      ? "signature-image-active"
                      : ""
                  }`}
                />
              ))}
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