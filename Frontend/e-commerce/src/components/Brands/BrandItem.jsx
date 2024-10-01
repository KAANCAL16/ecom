import React from "react";
import Slider from "react-slick";
import "./Brands.css";

// Images import
import adidasPng from "./images/adidasPng.png";
import applePng from "./images/applePng.png";
import arcelikPng from "./images/arcelikPng.png";
import bekoPng from "./images/bekoPng.png";
import bskPng from "./images/bskPng.png";
import chanelPng from "./images/chanelPng.png";
import goldenRosePng from "./images/goldenRosePng.png";
import huaweiPng from "./images/huaweiPng.png";
import nikePng from "./images/nikePng.png";
import pbPng from "./images/pbPng.png";
import pumaPng from "./images/pumaPng.png";
import samsungPng from "./images/samsungPng.png";
import schwPng from "./images/SchwPng.png";
import xiPng from "./images/xiPng.png";

const BrandItem = () => {
  const brands = [
    { id: 1, image: adidasPng },
    { id: 2, image: applePng },
    { id: 3, image: arcelikPng },
    { id: 4, image: bekoPng },
    { id: 5, image: bskPng },
    { id: 6, image: chanelPng },
    { id: 7, image: goldenRosePng },
    { id: 8, image: huaweiPng },
    { id: 9, image: nikePng },
    { id: 10, image: pbPng },
    { id: 11, image: pumaPng },
    { id: 12, image: samsungPng },
    { id: 13, image: schwPng },
    { id: 14, image: xiPng },
  ];

  const settings = {
    className: "carouselBtn",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="brands-container">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div className="brands-item" key={brand.id}>
            <div className="brand-box">
              <img src={brand.image} alt={`Brand ${brand.id}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandItem;
