import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CartProvider from "./context/CartProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App";
import { Layout } from "./Layouts/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <CartProvider>
      <Layout>
        <App />
      </Layout>
    </CartProvider>
  </BrowserRouter>
);
