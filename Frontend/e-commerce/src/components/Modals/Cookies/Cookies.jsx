import PropTypes from "prop-types";
import "./Cookies.css";
import { useNavigate } from "react-router-dom";

const Cookies = ({ isCookiesShow, setIsCookiesShow }) => {
  const navigate = useNavigate();

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiePolicyAccepted", JSON.stringify(true));
    setIsCookiesShow(false);
  };

  const handleRejectCookies = () => {
    setIsCookiesShow(false);
    setTimeout(() => setIsCookiesShow(true), 2000);
  };

  const handleExamineCookies = () => {
    navigate("/");
  };

  return (
    <div className={`modal-cookies ${isCookiesShow ? "show" : ""}`}>
      <div className="modal-content">
        <div className="popup-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
          aspernatur molestias asperiores nisi eligendi ipsum, vel provident
          perferendis aliquam, expedita, at tempore ea soluta. Quaerat amet
          veritatis, delectus laboriosam suscipit voluptate ad repellendus
          facere repellat iusto magnam numquam nemo, cupiditate eos, enim
          doloribus est. Sit voluptates inventore tempora. Esse optio
          exercitationem corporis natus, dolores, est temporibus iste libero ex
          placeat officiis, nulla non doloremque vel impedit facere maiores.
        </div>
        <div className="button-group">
          <button className="btn btn-accept" onClick={handleAcceptCookies}>
            ACCEPT
          </button>
          <button className="btn btn-reject" onClick={handleRejectCookies}>
            REJECT
          </button>
          <button className="btn btn-examine" onClick={handleExamineCookies}>
            EXAMINE
          </button>
        </div>
      </div>
    </div>
  );
};

Cookies.propTypes = {
  isCookiesShow: PropTypes.bool.isRequired,
  setIsCookiesShow: PropTypes.func.isRequired,
};

export default Cookies;
