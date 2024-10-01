import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Success from "./pages/Success";
import CategoryPage from "./pages/CategoryPage";
import CategoryItem from "./components/Categories/CategoryItem";
import Category from "./components/Category/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/Mens" element={<CategoryPage />} />
      <Route path="/" element={<CategoryItem />} />
      <Route path="/category/:All" element={<Category />} />
    </Routes>
  );
}

export default App;
