import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-4">
        <NavLink to={`/DetailProduct/${product.productID}`}>
          <img src={`${product.productImg}`} alt="" />
          <p>{product.productName}</p>
          <p>
            <span>{product.productPrice} VNĐ</span>
          </p>
        </NavLink>
      </div>
    );
  }
}
