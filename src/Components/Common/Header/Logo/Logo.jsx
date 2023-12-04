import React from "react";
import logo from "./assets/logo.svg";
import "./Logo.css";

const Logo = () => {
   return (
        <div>
             <img className="logo" src={logo} alt="./logo" />
        </div>
   );
};

export default Logo;
