// MainWebpage.js
import React from "react";
import CardCarousel from "./CardCarousel";

const MainWebpage = () => {
  return (
    <div
      className="main-webpage"
      style={{ backgroundColor: "#333", color: "#fff" }}
    >
      <CardCarousel />
    </div>
  );
};

export default MainWebpage;
