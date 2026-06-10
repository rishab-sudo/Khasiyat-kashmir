import React, { useState, useEffect, useCallback } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    text: "This is a good place to have food. The staff is humble and provides excellent service. The place gives lively vibes. Do visit for food.",
    name: "Gayatri Ransubhe",
    rating: 5,
  },
  {
    text: "Exceptional food and unique service. Tasted authentic Kashmiri Pulao. A memorable dining experience.",
    name: "Sajina T",
    rating: 5,
  },
  {
    text: "Amazing food and superb service! A must-try place when visiting.",
    name: "Gaurav Bhakri",
    rating: 5,
  },
  {
    text: "Nice ambience, friendly staff, clean environment, and tasty food.",
    name: "Munira Ayub",
    rating: 5,
  },
  {
    text: "Good food, great taste, and a very pleasant ambience.",
    name: "Ishank Malhotra",
    rating: 5,
  },
  {
    text: "Delicious food with generous quantity and a wonderful ambience. Overall everything was excellent.",
    name: "Ganesh Kumar",
    rating: 5,
  },
  {
    text: "Good food, beautiful night ambience, and very good service. Overall a great experience.",
    name: "Mashooq Hussain",
    rating: 5,
  },
  {
    text: "Amazing food that perfectly matches the vibe of the place. Good service as well.",
    name: "Tabraiz Abdullah",
    rating: 5,
  },
  {
    text: "Amazing food and super amazing service. Highly recommended.",
    name: "Shefali Singh",
    rating: 5,
  },
  {
    text: "Good food and excellent service. Served wonderfully by the team.",
    name: "Sheikh Tawseef",
    rating: 5,
  },
  {
    text: "Every Punjabi who visits Kashmir must visit this restaurant.",
    name: "Gagan Sidhwan",
    rating: 5,
  },
  {
    text: "Food was great with excellent vegetarian options. Warm hospitality and attentive staff made the experience special.",
    name: "Khursheed Zahid",
    rating: 5,
  },
  {
    text: "Amazing food and ambience. Great staff and wonderful hospitality.",
    name: "Meghal Shah",
    rating: 5,
  },
  {
    text: "Very good service provided by the staff. A delightful dining experience.",
    name: "Prince Goyal",
    rating: 5,
  },
  {
    text: "Very good food with an excellent dining experience and attentive service.",
    name: "Amit Singh",
    rating: 5,
  },
  {
    text: "Price is slightly high, but the quantity is generous and worth it.",
    name: "Urmila Shetye",
    rating: 4,
  },
  {
    text: "Amazing food and ambience. A perfect place to enjoy quality vegetarian cuisine.",
    name: "Gunjan Rastogi",
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