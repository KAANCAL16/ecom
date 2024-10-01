import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Slider.css";

const SliderItem = ({ imageSrc, active }) => {
  return (
    <div className={`slider-item ${active ? "active" : ""}`}>
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">Huge Discounts - 2024</p>
        <Link to="/category/:All" className="btn-products">
          Go to Products
        </Link>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
  active: PropTypes.bool,
};

export default SliderItem;
