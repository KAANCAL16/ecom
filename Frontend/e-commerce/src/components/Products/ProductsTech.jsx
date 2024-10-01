import { Carousel } from "@trendyol-js/react-carousel";
import ProductItem from "./ProductItem.jsx";
import { LeftArrow, RightArrow } from "./CarouselArrows";
import data from "../../data.js";

const ProductsTech = () => {
  const productsRange1to10 = data.filter(
    (product) => product.id >= 1 && product.id <= 10
  );

  return (
    <div className="product-carousel">
      <div className="container">
        <h3>Electronic Products</h3>
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

export default ProductsTech;
