import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import * as action from "./modules/action";

export class changePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        ...this.state,
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = () => {
    this.props.fecthPassword(this.state, this.props.history);
  };

  render() {
    let user = localStorage.getItem("UserInfo");
    if (!user) {
      swal("Vui lòng đăng nhập!", "Chưa có thông tin tài khoản", "error");
      this.props.history.replace("/login");
    }
    return (
      <div>
        <section className="container login">
          <div className="row">
            <div className="col-12">
              <div id="formLogin">
                <h3>Đổi mật khẩu</h3>
                <p>
                  <label>Mật Khẩu Hiệt Tại</label>
                  <input
                    type="password"
                    placeholder="currentPassword"
                    name="currentPassword"
                    onChange={this.handleOnchange}
                  ></input>
                </p>
                <p>
                  <label>Mật Khẩu Mới</label>
                  <input
                    type="password"
                    placeholder="newPassword"
                    name="newPassword"
                    onChange={this.handleOnchange}
                  ></input>
                </p>
                <p>
                  <label>Nhập Lại Mật Khẩu Mới</label>
                  <input
                    type="password"
                    placeholder="repeatNewPassword"
                    name="repeatNewPassword"
                    onChange={this.handleOnchange}
                  ></input>
                </p>

                <button className="btn-default" onClick={this.handleSubmit}>XÁC NHẬN</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fecthPassword: (data, history) => {
      dispatch(action.actChangePasswordReducer(data, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(changePassword);
