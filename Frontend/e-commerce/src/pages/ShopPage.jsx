import { Fragment } from "react";
import Categories from "../components/Categories/Categories";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import ProductsTech from "../components/Products/ProductsTech";
import ProductsFashion from "../components/Products/ProductsFashion";
import ProductsAuto from "../components/Products/ProductsAuto";
import Brands from "../components/Brands/Brands";
import ProductsHome from "../components/Products/ProductsHome";
import Slider from "../components/Slider/Slider";

const ShopPage = () => {
  return (
    <Fragment>
      <Brands />
      <Slider />
      <Categories />
      <ProductsTech />
      <ProductsFashion />
      <CampaignSingle />
      <ProductsHome />
      <ProductsAuto />
    </Fragment>
  );
};

export default ShopPage;
