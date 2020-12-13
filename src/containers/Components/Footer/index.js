import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
			<div>
        <footer style={{backgroundImage: 'url(./img/cloud-dark.svg)'}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <ul>
                  <li>
                    <NavLink to="">Bảo hành</NavLink>
                  </li>
                  <li>
                    <NavLink to="">COVID-19</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Liên hệ</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Giao hàng &amp; Đổi trả</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Sự thật về chúng tôi</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Dịch vụ sau mua</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Phí vận chuyển</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <NavLink to="">Thông tin</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Kích cỡ</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Kho</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Bán sỉ</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Bền vững</NavLink>
                  </li>
                  <li>
                    <NavLink to="">1% Cho kế hoạch</NavLink>
                  </li>
                  <li>
                    <NavLink to="">CHÍNH SÁCH BẢO MẬT</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <NavLink to="">Theo dõi </NavLink>
                  </li>
                  <li>
                    <NavLink to="">INSTAGRAM</NavLink>
                  </li>
                  <li>
                    <NavLink to="">FACEBOOK</NavLink>
                  </li>
                  <li>
                    <NavLink to="">PRINTEREST</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Bản tin</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    <NavLink to="">Cửa hàng</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Bình chiểu, thủ đức</NavLink>
                  </li>
                  <li>
                    <NavLink to="">INFO@RYDERLABEL.COM</NavLink>
                  </li>
                  <li>
                    <NavLink to="">(03) 9428 0008</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
