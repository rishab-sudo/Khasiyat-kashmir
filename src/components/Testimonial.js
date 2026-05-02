import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality and love",
    name: "Maichel Williamson",
    role: "CTO, Morlex Group",
    img: "/images/user1.jpg",
  },
  {
    text: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality and love",
    name: "Maichel Williamson",
    role: "CTO, Morlex Group",
    img: "/images/user2.jpg",
  },
  {
    text: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality and love",
    name: "Maichel Williamson",
    role: "CTO, Morlex Group",
    img: "/images/user3.jpg",
  },
  {
    text: "Rosoi is one of the most popular and tasty Restaurant with unique & special test food menu made by our passionate more an chefs with love and quality and love",
    name: "Maichel Williamson",
    role: "CTO, Morlex Group",
    img: "/images/user4.jpg",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (testimonials.length / 2));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial">
      <div className="tset-container ">

        {/* HEADING */}
        <div className="testimonial-heading">
          <h5>TESTIMONIAL</h5>
          <h2>What Our Clients Say</h2>
        </div>

        {/* SLIDER */}
        <div className="testimonial-slider">
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {[0, 1].map((slide) => (
              <div className="testimonial-slide" key={slide}>
                {testimonials.slice(slide * 2, slide * 2 + 2).map((item, i) => (
                  <div className="testimonial-box" key={i}>
                    <p className="testimonial-text">{item.text}</p>

                    <div className="testimonial-user">
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                      <img src={item.img} alt="user" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="testimonial-dots">
          {[0, 1].map((dot) => (
            <span
              key={dot}
              className={index === dot ? "active" : ""}
              onClick={() => setIndex(dot)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;