import React from "react";
import "./Quality.css";

const Quality = () => {
  return (
    <>
    <section className="quality">
      <div className="container-fluid g-0">
        <div className="quality-row">

          {/* LEFT IMAGE */}
          <div className="quality-left">
            <img src={require("../assets/quality-book1.jpg")} alt="Quality" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="quality-right">

            {/* HEADING + ICON */}
            <div className="quality-heading">
              <h2>Our Quality Food</h2>
              <img src="/images/quality-icon.png" alt="icon" />
            </div>

            {/* FIRST ROW */}
            <div className="quality-flex">
              <div className="quality-box">
                <h4>Passionate Chef</h4>
                <p>
                  Rosoi is one of the most popular Restaurant & Special menu made by our passionate chefs and quality with can impress you
                </p>
              </div>

              <div className="quality-box">
                <h4>100% Fresh Food</h4>
                <p>
                  Rosoi is one of the most popular Restaurant & special menu made by our passionate chefs and quality with can impress you
                </p>
              </div>
            </div>

            {/* SECOND ROW */}
            <div className="quality-flex">
              <div className="quality-box">
                <h4>Memorable Ambience</h4>
                <p>
                  Rosoi is one of the most popular Restaurant & special menu made by our passionate chefs and quality with can impress you
                </p>
              </div>

              <div className="quality-box">
                <h4>Special Dish for Occasion's</h4>
                <p>
                  Rosoi is one of the most popular Restaurant & special menu made by our passionate chefs and quality with can impress you
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    {/* =========================
    QUALITY 2 - EVENT BOOKING
========================= */}
<section className="quality2 container-fluid">

    <div className="quality2-row">

      {/* LEFT CONTENT */}
      <div className="quality2-left">
        <div className="left-text-div">
        <h5 className="quality2-subtitle">EVENT BOOKING</h5>

        <h2 className="quality2-title">
          Do you have any plan <br /> for any Party or Events?
        </h2>

        <p className="quality2-call">
          Call for Reservation <strong>+01234 567 891</strong>
        </p>

        <div className="quality2-info">

     <div className="quality2-box">
  <h4>Opening Hours</h4>

  <div className="hours-row">
    <span className="day">Monday - Saturday</span>
    <span className="hours-line"></span>
    <span className="time">7.30 am - 11.30 pm</span>
  </div>

  <div className="hours-row">
    <span className="day">Sunday</span>
    <span className="hours-line"></span>
    <span className="time">7.30 am - 11.30 pm</span>
  </div>

  <div className="hours-row">
    <span className="day">Happy Hour</span>
    <span className="hours-line"></span>
    <span className="time">5.30 pm - 09.00 pm</span>
  </div>

  <button className="quality2-btn">Book Early</button>
</div>

        </div>
      </div>
</div>
      {/* RIGHT IMAGE */}
      <div className="quality2-right">
        <img src={require("../assets/quality-book2.jpg")} alt="Event Booking" />
      </div>

    </div>

</section>
</>
  );
};

export default Quality;