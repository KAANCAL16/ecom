import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import ProductItem from "./ProductItem";
import { LeftArrow, RightArrow } from "./CarouselArrows";
import data from "../../data.js";

const ProductsAuto = () => {
  const productsRange21to30 = data.filter(
    (product) => product.id >= 21 && product.id <= 30
  );

  return (
    <div className="product-carousel">
      <div className="container">
        <h3>Automative Products</h3>
        <Carousel
          show={5}
          slide={5}
          swiping={true}
          leftArrow={<LeftArrow />}
          rightArrow={<RightArrow />}
        >
          {productsRange21to30.map((product) => (
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

export default ProductsAuto;
