import React from "react";
import './style.css';

const Banner = ({ web_banner }) => {
  return (
    <div classname="banner">
      <img src={web_banner} alt="Kaksi mäyräkoiraa" />
    </div>
  );
};
export default Banner;
