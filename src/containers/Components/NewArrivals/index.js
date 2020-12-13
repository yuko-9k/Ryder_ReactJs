import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NewArrivals extends Component {
  render() {
    const { movie } = this.props;
    return (
        <div className="col-4">
          <NavLink to="/DetailProduct">
            <img src={movie.hinhAnh} alt="" />
            <p>
             	{movie.tenPhim} <span>$89.00</span>
            </p>
          </NavLink>
	      </div>
    );
  }
}
