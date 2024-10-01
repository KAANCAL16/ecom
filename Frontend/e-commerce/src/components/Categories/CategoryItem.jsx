import React from "react";
import "./CategoryItem.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// IMAGES
import techApple from "./images/techApple.webp";
import spor from "./images/spor.webp";
import baby from "./images/baby.webp";
import construction from "./images/construction1.webp";
import manPolo from "./images/manPolo.jpg";
import homeLife from "./images/homeLife.webp";
import tyre from "./images/tyre.webp";
import versace from "./images/versace.webp";

// ARROWS
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "125px",
        right: "-75px",
        zIndex: 1,
        backgroundColor: "#252525",
        color: "#fff",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "125px",
        left: "-75px",
        zIndex: 1,
        backgroundColor: "#252525",
        color: "#fff",
      }}
      onClick={onClick}
    />
  );
};

const products = [
  {
    id: 1,
    image: techApple,
    button: "Electronic",
    link: "/category/electronic",
  },
  {
    id: 2,
    image: spor,
    button: "Spor & Outdoor",
    link: "/category/sport-outdoor",
  },
  {
    id: 3,
    image: baby,
    button: "Baby & Mom",
    link: "/category/baby-mom",
  },
  {
    id: 4,
    image: construction,
    button: "Construction & Market",
    link: "/category/construction-market",
  },
  {
    id: 5,
    image: manPolo,
    button: "Fashion",
    link: "/category/fashion",
  },
  {
    id: 6,
    image: homeLife,
    button: "Home & Life",
    link: "/category/home-life",
  },
  {
    id: 7,
    image: tyre,
    button: "Auto Accessory",
    link: "/category/auto-accessory",
  },
  {
    id: 8,
    image: versace,
    button: "Cosmetic",
    link: "/category/cosmetic",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        nextArrow: false,
        prevArrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: false,
        prevArrow: false,
      },
    },
  ],
};

const CategoryItem = () => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="category-box" key={product.id}>
            <Link to={product.link} className="category-item">
              <img
                src={product.image}
                alt={product.button}
                className="category-image"
              />
              <div className="overlay">
                <button className="btn btn-category">{product.button}</button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryItem;
