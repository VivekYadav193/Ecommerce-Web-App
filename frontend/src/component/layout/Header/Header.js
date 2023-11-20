import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/ecart.png";

import logo1 from "../../../images/ecart.png";

import logo2 from "../../../images/ecart2.png";

import { useState, useEffect } from "react";

import "./Header.css";

import { MdAddShoppingCart } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {

      
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [logo, setLogo] = useState(logo1);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Conditionally set the logo based on the window width
    setLogo(windowWidth <= 768 ? logo2 : logo1);
  }, [windowWidth]);

   
          



  const options = {
    burgerColor: "black",
    burgerColorHover: "#eb4034",

    logo,
    logoWidth: "14vmax",
    navColor1: "grey",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",

    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",

    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",

    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
    profileIcon: true,
    ProfileIconElement: FaUserAlt,
    searchIcon: true,
    SearchIconElement: AiOutlineSearch,
    cartIcon: true,
    CartIconElement: MdAddShoppingCart,
  };
             




  return (
    <div>
      <ReactNavbar {...options} />
    </div>
  );
};

export default Header;
