import React from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container">
      <section className="categories">
        <div className="container-fluid">
          <div className="section-title">
            <h2>All Categories</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <ul className="category-list">
            <CategoryItem />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Categories;
