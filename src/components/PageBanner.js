import React from "react";
import "./PageBanner.css";


const PageBanner = ({ title }) => {
  return (
    <section
      className="pagebanner"
      style={{ backgroundImage: `url(${""})` }}
    >
      <div className="pagebanner-overlay">
        <div className="pagebanner-content">
          <h1>{title}</h1>

          <p className="breadcrumb">
            Home <span>&gt;</span> {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;