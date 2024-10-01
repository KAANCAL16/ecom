import "./Search.css";
import PropTypes from "prop-types";

/// IMAGES ///
import eros from "./images/eros.jpg"
import mackbook from "./images/mackbook.webp"

const Search = ({ isSearchShow, setIsSearchShow }) => {
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form">
          <input type="text" placeholder="Search a product" />
          <button className="btn btn-search" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div className="results">
            <a href="#" className="result-item">
              <img
                src={eros}
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Versace Eros EDP 200ML</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$108.00</span>
              </div>
            </a>
            <a href="#" className="result-item">
              <img
                src={mackbook}
                className="search-thumb"
                alt=""
              />
              <div className="search-info">
                <h4>Mackbook Pro M4 1TB</h4>
                <span className="search-sku">SKU: PD0016</span>
                <span className="search-price">$1150.00</span>
              </div>
            </a>
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={() => setIsSearchShow(false)}
        ></i>
      </div>
    </div>
  );
};

Search.propTypes = {
  isSearchShow: PropTypes.bool.isRequired,
  setIsSearchShow: PropTypes.func.isRequired,
};

export default Search;
