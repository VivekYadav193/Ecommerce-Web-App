import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";


const product = {
    name: "Apple iPhone 12 Pro Max",
    price: 1099.99,
    image: "https://www.mytrendyphone.eu/images2/iPhone-12-Pro-Max-128GB-Gold-0194252092330-10112020-01-p.jpg",
    description:
        "The iPhone 12 Pro Max is a smartphone designed and marketed by Apple Inc. It is the largest variant in the iPhone 12 lineup, with a 6.7-inch display, and was released on November 13, 2020. The phone is available in six colors: Silver, Graphite, Gold, Pacific Blue, Starlight, and (PRODUCT)RED.",
    _id:"1"

}

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome To Ecommerce</p>
        <h1> FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#products">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
