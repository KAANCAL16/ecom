import { useState, useEffect } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Search from "../components/Modals/Search/Search";
import Cookies from "../components/Modals/Cookies/Cookies";
import Proptypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isCookiesShow, setIsCookiesShow] = useState(false);

  useEffect(() => {
    const cookiesStatus = localStorage.getItem("cookies")
      ? JSON.parse(localStorage.getItem("cookies"))
      : localStorage.setItem("cookies", JSON.stringify(true));

    setTimeout(() => {
      setIsCookiesShow(cookiesStatus);
    }, 2000);
  }, []);
  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      <Cookies
        isCookiesShow={isCookiesShow}
        setIsCookiesShow={setIsCookiesShow}
      />
      <ToastContainer position="top-right" autoClose={2000} />
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
