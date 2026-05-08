import React, { useEffect, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: "Very nice food. Excellent service. Soft music in the background makes your experience more pleasant. Must visit when you you are in Pahalgam.",
    name: "Rohan Jage",
    role: "CTO, Morlex Group",
    rating: 5,
  },
  {
    text: "Just as the name suggests, the food is truly khaas. The taste is really good and the quality is excellent. There are plenty of great options on the menu. The staff is courteous and knowledgeable.",
    name: "Sumeet Parmar",
    role: "CTO, Morlex Group",
    rating: 4.5,
  },
  {
    text: "I had an amazing dining experience at this restaurant! The ambiance was warm and inviting, perfect for a relaxed evening.",
    name: "Seema Sharma",
    role: "CTO, Morlex Group",
    rating: 4,
  },
  {
    text: "Pure vegetarian restaurant. Dahi ke kebab were awesome. Paneer Butter Masala was delicious with garlic naan and lachha paratha.",
    name: "Alok Shrivastav",
    role: "CTO, Morlex Group",
    rating: 5,
  },
  {
    text: "Great food, awesome mountain view, centrally located, and good service. Nutella frappe and Godfather platter were excellent.",
    name: "Monica Titus",
    role: "CTO, Morlex Group",
    rating: 4.5,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // ⭐ rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    let stars = "";

    for (let i = 0; i < fullStars; i++) {
      stars += "★";
    }

    if (halfStar) {
      stars += "☆";
    }

    return stars;
  };

  // 👤 initials image
  const getInitials = (name) => {
    const names = name.split(" ");
    return names[0][0] + names[1][0];
  };

  return (
    <section className="testimonial">
      <div className="tset-container">

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
            {Array.from({
              length: Math.ceil(testimonials.length / 2),
            }).map((_, slide) => (
              <div className="testimonial-slide" key={slide}>
                {testimonials
                  .slice(slide * 2, slide * 2 + 2)
                  .map((item, i) => (
                    <div className="testimonial-box" key={i}>
                      <p className="testimonial-text">{item.text}</p>

                      {/* ⭐ Stars Left Side Below Text */}
                      <div className="testimonial-stars">
                        {renderStars(item.rating)}
                      </div>

                      <div className="testimonial-user">
                        <div>
                          <h4>{item.name}</h4>
                          <span>{item.role}</span>
                        </div>

                        {/* 👤 Initials Circle */}
                        <div className="testimonial-avatar">
                          {getInitials(item.name)}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="testimonial-dots">
          {Array.from({
            length: Math.ceil(testimonials.length / 2),
          }).map((_, dot) => (
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