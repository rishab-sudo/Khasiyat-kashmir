import React from "react";
import { motion } from "framer-motion";
// import Service from "./Service";
import "./Quality.css";
import BuffetMenu from "./BuffetMenu";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Quality = () => {
  return (
    <>
      {/* =========================
          QUALITY SECTION
      ========================= */}
      <motion.section
        className="quality"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-fluid g-0">
          <div className="quality-row">

            {/* LEFT IMAGE */}
            <motion.div
              className="quality-left"
              variants={fadeUp}
            >
              <img
                src={require("../assets/Team/team1.jpeg")}
                alt="Quality"
              />
            </motion.div>
{/* RIGHT CONTENT */}
<motion.div
  className="quality-right"
  variants={fadeUp}
>

  {/* HEADING + ICON */}
  <motion.div
    className="quality-heading"
    variants={fadeUp}
  >
    <h2 className="page-heading">
      Why Guests Love Khaasiyat
    </h2>

    <img
      src={require("../assets/dish1.png")}
      alt="Pure Veg Restaurant in Pahalgam"
    />
  </motion.div>

  {/* FIRST ROW */}
  <motion.div
    className="quality-flex"
    variants={fadeUp}
  >
    <div className="quality-box">
      <h4>Authentic Kashmiri Taste</h4>

      <p className="page-description">
        Experience rich and authentic Kashmiri flavours prepared with
        traditional recipes, premium ingredients, and a touch of warmth in
        every dish.
      </p>
    </div>

    <div className="quality-box">
      <h4>Fresh & Pure Vegetarian Food</h4>

      <p>
        Every meal at Khaasiyat is freshly prepared using quality ingredients
        to deliver a healthy, hygienic, and satisfying pure veg dining
        experience.
      </p>
    </div>
  </motion.div>

  {/* SECOND ROW */}
  <motion.div
    className="quality-flex"
    variants={fadeUp}
  >
    <div className="quality-box">
      <h4>Warm Ambience & Hospitality</h4>

      <p>
        Enjoy delicious food in a peaceful and welcoming atmosphere inspired by
        the beauty and culture of Kashmir, perfect for families and travelers.
      </p>
    </div>

    <div className="quality-box">
      <h4>Perfect for Every Occasion</h4>

      <p>
        Whether it’s a family dinner, group gathering, or a relaxing meal after
        exploring Pahalgam, Khaasiyat makes every moment memorable.
      </p>
    </div>
  </motion.div>

</motion.div>
          </div>
        </div>
      </motion.section>

      {/* =========================
          SERVICE SECTION
      ========================= */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BuffetMenu/>
        {/* <Service /> */}
      </motion.section>

      {/* =========================
          QUALITY 2 - EVENT BOOKING
      ========================= */}
      <motion.section
        className="quality2 container-fluid"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className="quality2-row">

          {/* LEFT CONTENT */}
          <motion.div
            className="quality2-left"
            variants={fadeUp}
          >
            <div className="left-text-div">

              <h5 className="quality2-subtitle heading-tag">
                EVENT BOOKING
              </h5>

              <h2 className="quality2-title page-heading">
                Do you have any plan <br />
                for any Party or Events?
              </h2>

              <p className="quality2-call">
                Call for Reservation
                <strong> +91 91033 58985</strong>
              </p>

              <div className="quality2-info">

                <motion.div
                  className="quality2-box"
                  variants={fadeUp}
                >
                  <h4>Opening Hours</h4>

                  <div className="hours-row">
                    <span className="day">
                      Monday - Saturday
                    </span>

                    <span className="hours-line"></span>

                    <span className="time">
                      9.00 am - 9.00 pm
                    </span>
                  </div>

                  <div className="hours-row">
                    <span className="day">Sunday</span>

                    <span className="hours-line"></span>

                    <span className="time">
                      9.00 am - 10.00 pm
                    </span>
                  </div>

                  <div className="hours-row">
                    <span className="day">Happy Hour</span>

                    <span className="hours-line"></span>

                    <span className="time">
                      5.00 pm - 09.00 pm
                    </span>
                  </div>

                  <button className="quality2-btn">
                    Book Early
                  </button>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="quality2-right"
            variants={fadeUp}
          >
            <img
              src={require("../assets/cafe/front11.jpg")}
              alt="Event Booking"
            />
          </motion.div>

        </div>

      </motion.section>
    </>
  );
};

export default Quality;