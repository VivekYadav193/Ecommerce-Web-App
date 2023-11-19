import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
    
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>E-Cart</h1>
        <p>Kya Re Bhikhmangeya !!!</p>
        <p>Copyrights 2023 </p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="/">Instagram</a>
        <a href="/">Github</a>
        <a href="">Linkedln</a>
      </div>
    </footer>
  );
};

export default Footer;
