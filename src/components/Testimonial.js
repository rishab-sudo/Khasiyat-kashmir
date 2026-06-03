import React, { useState, useEffect, useCallback } from "react";
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
  {
  text: "Excellent food, well trained staff, and a warm ambience. Very good dishes. Special recommendations - try the Dahi Kabab. Parathas are yummy. The Chole Bhature was outstanding.",
  name: "Vinay Emmanuel",
  role: "CTO, Morlex Group",
  rating: 5,
},
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // MOBILE CHECK
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // TOTAL SLIDES
  const totalSlides = isMobile
    ? testimonials.length
    : Math.ceil(testimonials.length / 2);

  // NEXT
const nextSlide = useCallback(() => {
  setIndex((prev) => (prev + 1) % totalSlides);
}, [totalSlides]);

  // AUTO SLIDE
useEffect(() => {
  const interval = setInterval(nextSlide, 4000);

  return () => clearInterval(interval);
}, [nextSlide]);

  // ⭐ STARS
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

  // 👤 INITIALS
  const getInitials = (name) => {
    const names = name.split(" ");
    return names[0][0] + names[1][0];
  };

  return (
    <section className="testimonial">
      <div className="tset-container">

        {/* HEADING */}
        <div className="testimonial-heading">
          <h5 className="heading-tag">TESTIMONIAL</h5>
<h2 className="page-hheading">
Stories of Savor and Satisfaction

</h2>
        </div>
{/*  */}
        {/* SLIDER */}
        <div className="testimonial-slider">

          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >

            {isMobile ? (
              // MOBILE SINGLE CARD
              testimonials.map((item, i) => (
                <div className="testimonial-slide mobile-slide" key={i}>

                  <div className="testimonial-box">
                    <p className="testimonial-text">{item.text}</p>

                    <div className="testimonial-stars">
                      {renderStars(item.rating)}
                    </div>

                    <div className="testimonial-user">

                      <div>
                        <h4>{item.name}</h4>
                        {/* <span>{item.role}</span> */}
                      </div>

                      <div className="testimonial-avatar">
                        {getInitials(item.name)}
                      </div>

                    </div>
                  </div>

                </div>
              ))
            ) : (
              // DESKTOP 2 CARDS
              Array.from({
                length: Math.ceil(testimonials.length / 2),
              }).map((_, slide) => (
                <div className="testimonial-slide" key={slide}>

                  {testimonials
                    .slice(slide * 2, slide * 2 + 2)
                    .map((item, i) => (
                      <div className="testimonial-box" key={i}>

                        <p className="testimonial-text">{item.text}</p>

                        <div className="testimonial-stars">
                          {renderStars(item.rating)}
                        </div>

                        <div className="testimonial-user">

                          <div>
                            <h4>{item.name}</h4>
                            {/* <span>{item.role}</span> */}
                          </div>

                          <div className="testimonial-avatar">
                            {getInitials(item.name)}
                          </div>

                        </div>
                      </div>
                    ))}

                </div>
              ))
            )}

          </div>

        </div>

        {/* DOTS */}
        <div className="testimonial-dots">

          {Array.from({
            length: totalSlides,
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