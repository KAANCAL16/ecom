import React from "react";
import "./Fashion.css";
import mens from "./images/mensFashion.jpg";
import teens from "./images/teenFashion.jpg";
import women from "./images/womenFashion.jpg";
import { Link } from "react-router-dom";

const Fashion = () => {
  const products = [
    {
      id: 1,
      image: mens,
      title: "MENS",
    },
    {
      id: 2,
      image: women,
      title: "WOMENS",
    },
    {
      id: 3,
      image: teens,
      title: "KİDS",
    },
  ];

  return (
    <div className="padding">
      <div className="fashions">
        <div className="container">
          <div className="tags">
            <h1>FASHION</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="fashion">
            {products.map((product) => (
              <div className="fashion-box" key={product.id}>
                <h3>{product.title}</h3>
                <Link to={"/Mens"} className={"product-category"}>
                  <img src={product.image} alt={product.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
