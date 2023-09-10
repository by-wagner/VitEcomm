import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/Cart/CartContext";
import Feature from "./components/Feature/Feature";
import CheckoutPage from "./components/Checkout/CheckoutPage";

const App: React.FC = () => {
  const isCheckoutPage = window.location.pathname === "/checkout";

  return (
    <CartProvider>
      <Router>
        {/* Render Navbar and Feature only if on the main page */}
        {!isCheckoutPage && <NavBar />}
        {!isCheckoutPage && <Feature />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        {/* Render Footer only if on the main page */}
        {!isCheckoutPage && <Footer />}
      </Router>
    </CartProvider>
  );
};

export default App;
