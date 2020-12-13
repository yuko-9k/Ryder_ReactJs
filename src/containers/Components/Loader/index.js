import React from "react";
import "./style.css";
import logo from "../../../images/logo.png";


export default function Loader() {
  return (
    <div className="wrapper">
      <div id="star">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
