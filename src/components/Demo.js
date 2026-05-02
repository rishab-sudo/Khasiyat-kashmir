import React, { useState } from "react";
import "./Demo.css";

const menuPages = [
  {
    title: "Breakfast",
    items: ["Grill Salmon", "Pesto Pasta", "Avocado Toast"],
  },
  {
    title: "Brunch",
    items: ["Egg Benedict", "Pancakes", "Coffee"],
  },
  {
    title: "Lunch",
    items: ["Caesar Salad", "Burger", "Sandwich"],
  },
  {
    title: "Snacks",
    items: ["French Fries", "Nachos", "Cold Drinks"],
  },
  {
    title: "Dinner",
    items: ["BBQ Ribs", "Steak", "Wine"],
  },
];

const Demo = () => {
  const [page, setPage] = useState(0);

  const next = () => {
    if (page < menuPages.length - 2) {
      setPage(page + 2);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 2);
    }
  };

  return (
    <section className="demo">

      <div className="book">

        {/* LEFT PAGE */}
        <div className="page left">
          <h2>{menuPages[page].title}</h2>
          {menuPages[page].items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        {/* RIGHT PAGE */}
        <div className="page right">
          {menuPages[page + 1] && (
            <>
              <h2>{menuPages[page + 1].title}</h2>
              {menuPages[page + 1].items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </>
          )}
        </div>

      </div>

      {/* CONTROLS */}
      <div className="controls">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>

    </section>
  );
};

export default Demo;