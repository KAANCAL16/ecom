// CarouselArrows.js
import React from "react";

// Sol ok bileşeni
export const LeftArrow = ({ onClick }) => (
  <button className="carousel-arrow left" onClick={onClick}>
    &#10094;
  </button>
);

// Sağ ok bileşeni
export const RightArrow = ({ onClick }) => (
  <button className="carousel-arrow right" onClick={onClick}>
    &#10095;
  </button>
);
