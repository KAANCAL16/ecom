import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import ProductItem from "./ProductItem";
import { LeftArrow, RightArrow } from "./CarouselArrows";
import data from "../../data.js";

const ProductsFashion = () => {
  const productsRange11to20 = data.filter(
    (product) => product.id >= 11 && product.id <= 20
  );

  return (
    <div className="product-carousel">
      <div className="container">
        <h3>Fashions Products</h3>
        <Carousel
          show={5}
          slide={5}
          swiping={true}
          leftArrow={<LeftArrow />}
          rightArrow={<RightArrow />}
        >
          {productsRange11to20.map((product) => (
            <ProductItem
              product={{
                ...product,
                discount: product.discount.toString(),
                price: product.price.toString(),
              }}
              key={product.id}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsFashion;
