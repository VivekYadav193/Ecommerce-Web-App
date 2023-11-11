import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import webFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/products/:keyword" element={<Products />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
