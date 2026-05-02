import React from "react";
import "./Service.css";
import { FaBirthdayCake, FaGlassCheers, FaUtensils } from "react-icons/fa";

const data = [
  {
    icon: <FaBirthdayCake />,
    title: "Birthday Party",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <FaGlassCheers />,
    title: "Events Party",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <FaUtensils />,
    title: "Private Dining",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

const Service = () => {
  return (
    <section className="service">
      <div className="service-container">
        <div className="service-row">

          {data.map((item, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Service;