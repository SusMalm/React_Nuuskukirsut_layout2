import React from "react";
import Banner from "./Banner";
import dogi_image from "./img/koirat_vaaka.png";
import './style.css';

const Header = ({ title }) => {
  return (
    <div className="header">
      <Banner web_banner={dogi_image} />
      {title}
    </div>
  );
};

export default Header;

