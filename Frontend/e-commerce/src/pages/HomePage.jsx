import { Fragment } from "react";
import Brands from "../components/Brands/Brands";
import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Fashion from "../components/Fashion/Fashion";
import ProductsTech from "../components/Products/ProductsTech";
import ProductsFashion from "../components/Products/ProductsFashion";
import ProductsAuto from "../components/Products/ProductsAuto";
import ProductsHome from "../components/Products/ProductsHome";

const HomePage = ({ isSearchShow, setIsSearchShow }) => {

  return (
    <Fragment>
      <Slider />
      <Categories />
      <Brands />
      <ProductsTech />
      <Fashion />
      <ProductsFashion />
      <Brands />
      <CampaignSingle />
      <ProductsHome />
      <ProductsAuto />
    </Fragment>
  );
};

export default HomePage;
