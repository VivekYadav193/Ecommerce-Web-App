import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const product = {
  name: "Apple iPhone 12",
  price: 1099.99,
  image: [
    {
      url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923780378",
    },
  ],
  _id: "abc",
};

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      <MetaData title={"Buy Best Products Online"} />

      <div className="banner">
        <p>Welcome To Ecommerce</p>
        <h1> FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Home;
