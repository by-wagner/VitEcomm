
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./components/Cart/CartContext"; // Importing the CartProvider
import Feature from "./components/Feature/Feature";

const App: React.FC = () => {
  return (
    <CartProvider> {/* Wrapping the components with CartProvider */}
      <Router>
        <NavBar />
        <Feature />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes can be added here */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
