import React from "react";
import "./Staff.css";

const Staff = () => {
  return (
    <section id="staff" className="staff-section">
      <div className="staff-container">

        {/* LEFT COLOR BLOCK */}
        <div className="staff-left">
          <div className="staff-color-box">
           <span className="staff-tag">
            PURE VEG RESTAURANT IN PAHALGAM
          </span>

          <h2 className="staff-title page-heading">
      The Story Behind Khaasiyat

          </h2>

          <p className="staff-description page-description">
          Founded by Harish Kale, Khaasiyat was created with a vision to offer travellers and families a premium pure vegetarian dining experience in
           the heart of Pahalgam. Inspired by the challenge of finding quality vegetarian food during family travels, the restaurant was established to celebrate authentic flavours, warm hospitality, and memorable dining experiences, brought to life by our skilled chefs who craft every dish with passion, care, and attention to detail.
          </p>

         

          <p className="staff-highlight">
            Fresh ingredients. Soulful flavours. Warm hospitality.
          </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="staff-right">
          <img src={require("../assets/Team/team1.jpeg")}/>
        </div>

      </div>
    </section>
  );
};

export default Staff;