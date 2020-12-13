import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ShopContent extends Component {
  render() {
    return (
      <div>
        <section className="banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <img src="./img/banner1.png" alt="" />
              </div>
              <div className="col-6">
                <img src="./img/banner2.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="Gday">
          <div className="container">
            <div className="row Gday-top">
              <div className="col-7">
                <img src="./img/gday.png" alt="" />
              </div>
              <div className="col-5">
                <div className="gday-content">
                  <h1 className="text-left">G'day</h1>
                  <p>ɡəˈdeɪ</p>
                  <p className="font-italic">good day</p>
                  <p>
                    Một câu chào quen thuộc, được sử dụng thường xuyên và bất cứ
                    lúc nào.
                  </p>
                  <p>Thường được kết hợp với "mate", như trong "G'day Mate!"</p>
                  <p>Áo len G'day, được làm từ 100% cotton hữu cơ.</p>
                  <button className="btn-default">
                    <NavLink to="/">Mua sắm ngay</NavLink>
                  </button>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <div className="subcrise">
                  <p>
                    Đăng ký để nhận được 10% giảm giá cho đơn hàng đầu tiên của
                    bạn.
                  </p>
                  <div className="email">
                    <input type="text" placeholder="Địa chỉ email" />
                    <button className="btn-default">
                      <NavLink to="/">Theo dõi</NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="social">
          <div className="container-fluid text-center">
            <p className="font-weight-bold">@ryder_label</p>
            <div className="row">
              <div className="col-3">
                <img src="./img/social-1.jpg" alt="" />
                <div className="black-content">
                  <div className="black-hover" />
                  <div className="icon-black-hover">
                    <i className="fab fa-instagram" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <img src="./img/social-2.jpg" alt="" />
                <div className="black-content">
                  <div className="black-hover" />
                  <div className="icon-black-hover">
                    <i className="fab fa-instagram" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <img src="./img/social-3.jpg" alt="" />
                <div className="black-content">
                  <div className="black-hover" />
                  <div className="icon-black-hover">
                    <i className="fab fa-instagram" />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <img src="./img/social-4.jpg" alt="" />
                <div className="black-content">
                  <div className="black-hover" />
                  <div className="icon-black-hover">
                    <i className="fab fa-instagram" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
