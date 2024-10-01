import React from "react";
import "./Brands.css";
import BrandItem from "./BrandItem";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-title">
          <h1>Populer Brands</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
          <ul className="brand-list">
            <BrandItem />
          </ul>
      </div>
    </section>
  );
};

export default Brands;
