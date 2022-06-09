import React from "react";
import './style.css';

const Social = ({ icon1, icon2, icon3 }) => {
  return (
    <a
      href={icon3}
      className={icon1}
      style={{
        backgroundImage: `url(${icon2})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
export default Social;
