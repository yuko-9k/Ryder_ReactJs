import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import Modal from "../ModalCart/index";
import ModalSearch from "../ModalSearch/index";
import Catalog from "../Catalog/index";
import { connect } from "react-redux";

class NavbarHome extends Component {
  renderTotalQuantity = () => {
    const { listCart } = this.props;
    return listCart.reduce((a, b) => {
      return a + b.quantityProduct;
    }, 0);
  };

  render() {
    return (
      <div>
        <header>
          <div className="container-fluid">
            <div className="freeShip">
              <marquee behavior="scroll" direction="left">
                AU MIỄN PHÍ VẬN CHUYỂN! Do các biện pháp phòng ngừa COVID-19,
                đơn đặt hàng có thể mất lâu hơn dự kiến ​​để được giao.
              </marquee>
            </div>
            <nav>
              <div className="container d-flex p-0">
                <div className="nav-left">
                  <NavLink to="/home">
                    <img src="../../../img/logo.png" alt="" />
                  </NavLink>
                  <div className="nav-shop">
                    <ul>
                      <li>
                        <NavLink to="/" className="aControl">
                          Cửa hàng <i className="fa fa-angle-down" />
                        </NavLink>
                        <div className="dropdown-menu">
                          <NavLink to="/allProduct">Toàn bộ sản phẩm</NavLink>
                          <Catalog />
                        </div>
                      </li>
                      <li>
                        <NavLink to="/collection21">
                          Bộ sưu tập <i className="fa fa-angle-down" />
                        </NavLink>
                        <div className="dropdown-menu">
                          <NavLink to="/collection21">
                            Bộ sưu tập N<sup>0</sup>21
                          </NavLink>
                          <NavLink to="/collection20">
                            Bộ sưu tập N<sup>0</sup>20
                          </NavLink>
                        </div>
                      </li>
                      <li>
                        <NavLink to="/AboutUs">
                          Về chúng tôi <i className="fa fa-angle-down" />
                        </NavLink>
                        <div className="dropdown-menu">
                          <NavLink to="/AboutUs">Chúng tôi</NavLink>
                          <NavLink to="/">Cửa hàng</NavLink>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="nav-right">
                  <ul>
                    <li>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#Search"
                        className="button-search"
                      >
                        <Link to="">Tìm kiếm</Link>
                      </button>
                    </li>
                    <li>
                      <button
                        className="button-search"
                        onClick={() => {
                          console.log(this.props);
                          if (localStorage.getItem("UserInfo")) {
                            this.props.history.replace("/UserPage");
                          } else {
                            this.props.history.replace("/login");
                          }
                        }}
                      >
                        <NavLink to="/login">Tài khoản</NavLink>
                      </button>
                    </li>
                    <li>
                      <button
                        className="button-search"
                        // to="/Cart"
                        data-toggle="modal"
                        data-target="#modalCart"
                      >
                        Giỏ hàng{`(${this.renderTotalQuantity()})`}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* pop-up bottom */}
        <div className="popup" style={{ display: "none" }}>
          <div className="popup-container" id="popupContainer">
            <div className="popup-wrapper">
              <div className="popup-center">
                <div className="popup--newsletter-title">
                  <p>Đăng ký để được giảm giá 10% cho đơn hàng đầu tiên của bạn</p>
                </div>
                <div className="popup-newsletter-form">
                  <form method="post">
                    <input
                      type="email"
                      placeholder="Địa chỉ email"
                      className="inputEmail"
                    />
                    <input type="submit" value="Xác nhận" className="inputEnter" />
                  </form>
                </div>
              </div>
            </div>
            <button
              className="close-popup"
              onClick={() => {
                let popup = document.getElementById("popupContainer");
                popup.style.transform = "translateY(210px)";
              }}
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>

        {/* modal search */}
        <ModalSearch />
        {/* modal-cart */}
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listCart: state.detailProductReducer.listCart,
    catalog: state.catalogReducer.catalog,
  };
};

const ConnectedComponent = connect(mapStateToProps, null)(NavbarHome);

export default withRouter(ConnectedComponent);
