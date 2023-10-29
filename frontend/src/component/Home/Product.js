import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "gray",
  activeColor: "tomato",
  value: 2.5,
  isHalf: true,
  size: window.innerWidth < 600 ? 20 : 25,
};

const Product = ({ product }) => {
  return (
    <Link className="productCard" to={product._id}>
      <img src="" alt="product" />

      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> <span>256 reviews</span>
      </div>
      <span>{product.price}</span>
    </Link>
  );
};

export default Product;
