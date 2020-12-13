import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as act from "../../HomeTemplate/Login/modules/action";
import GetDetailOder from "../getDetailOrder/index";

class UserPage extends Component {
  LogoutUser = () => {
    this.props.LogoutUser(this.props.history);
  };

  render() {
    if (!localStorage.getItem("UserInfo")) return <Redirect to="/login" />;
    const { name, userName } = JSON.parse(localStorage.getItem("UserInfo"));
    return (
      <div className="container">
        <div className="text-center account-wrapper">
          <h3>Tài khoản của bạn</h3>
          <p>Trang chủ / Tài khoản</p>
          <div className="text-left mb-5">
            <h3>{name}</h3>
            <p>{userName}</p>
            <p>
              <a href="#a" className="text-body">
                Thêm địa chỉ
              </a>
            </p>
            <p>
              <Link to="/changePassword" style={{ color: "black" }}>
                Đổi mật khẩu
              </Link>
            </p>
            <button className="button-search" onClick={this.LogoutUser}>
              Đăng xuất
            </button>
          </div>
          <div className="text-left mb-5">
            <h3>Đơn hàng</h3>
            <GetDetailOder />
            {/* <p>Bạn chưa đặt bất kỳ đơn hàng nào.</p> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    LogoutUser: (history) => {
      dispatch(act.actLogout(history));
    },
  };
};

export default connect(null, mapDisPatchToProps)(UserPage);
