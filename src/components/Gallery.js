import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";

const galleryImages = [
  require("../assets/cafe/khasiyat front1.jpeg"),
  require("../assets/cafe/khasiyat front2.jpeg"),
  require("../assets/food/food1.jpeg"),
  require("../assets/food/food2.jpeg"),
  require("../assets/cafe/khasiyat front4.jpeg"),
  require("../assets/food/food3.jpeg"),
];

/**
 * Returns the position class for a slide given its offset from current.
 *  0  → center
 * -1  → left
 * +1  → right
 * -2  → far-left  (exits left when going right, or enters from left when going left)
 * +2  → far-right
 * everything else → hidden (not rendered)
 */
function getPositionClass(offset) {
  switch (offset) {
    case  0: return "center";
    case -1: return "left";
    case  1: return "right";
    case -2: return "far-left";
    case  2: return "far-right";
    default: return null; // don't render
  }
}

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const total = galleryImages.length;

  /* wrap-aware modular offset  (-2 … +2) */
  const getOffset = useCallback(
    (idx) => {
      let raw = idx - current;
      // wrap around the array edges
      if (raw >  total / 2) raw -= total;
      if (raw < -total / 2) raw += total;
      return raw;
    },
    [current, total]
  );

  /* auto-advance */
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % total),
      3000
    );
    return () => clearInterval(id);
  }, [total]);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + total) % total);

  const nextSlide = () =>
    setCurrent((c) => (c + 1) % total);

  return (
    <div className="gallery">
       <div className="gallery-title">
          <h5>Food & Ambience</h5>
          <h2>Discover the perfect blend of authentic flavours.</h2>
        </div>
    

      <div className="slider-container">
        {galleryImages.map((src, idx) => {
          const offset = getOffset(idx);
          const posClass = getPositionClass(offset);

          /* only render the 5 visible slots */
          if (posClass === null) return null;

          return (
            <div
              key={idx}
              className={`slide ${posClass}`}
              onClick={() => {
                if (posClass === "center") {
                  setSelectedImage(src);
                } else if (posClass === "left" || posClass === "far-left") {
                  prevSlide();
                } else {
                  nextSlide();
                }
              }}
            >
              <img src={src} alt={`slide-${idx}`} />
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      {/* <div className="slider-buttons">
        <button onClick={prevSlide}>⟵ Prev</button>
        <button onClick={nextSlide}>Next ⟶</button>
      </div> */}

      {/* Lightbox popup */}
      {selectedImage && (
        <div
          className="gallery-popup"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;