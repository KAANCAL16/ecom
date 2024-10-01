import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import ProductItem from "./ProductItem.jsx";
import { LeftArrow, RightArrow } from "./CarouselArrows";
import data from "../../data.js";

const ProductsHome = () => {
  const productsRange1to10 = data.filter(
    (product) => product.id >= 31 && product.id <= 40
  );

  return (
    <div className="product-carousel">
      <div className="container">
        <h3>Home Products</h3>
        <Carousel
          show={5}
          slide={5}
          swiping={true}
          leftArrow={<LeftArrow />}
          rightArrow={<RightArrow />}
        >
          {productsRange1to10.map((product) => (
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

export default ProductsHome;
