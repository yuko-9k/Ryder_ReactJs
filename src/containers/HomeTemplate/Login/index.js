import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import * as action from "./modules/action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: "",
        userPassword: "",
      },
    };
  }

  handleOnchange = (e) => {
    let { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user);
    const { history } = this.props;
    this.props.pushInfoUser(this.state.user, history);
  };

  render() {
    return (
      <div>
        <section className="container login">
          <div className="row">
            <div className="col-12">
              <form id="formLogin" onSubmit={this.handleOnSubmit}>
                <h3>Đăng nhập</h3>
                <p>
                  <label>Tên tài khoản</label>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={this.handleOnchange}
                    name="userName"
                  ></input>
                </p>
                <p>
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    onChange={this.handleOnchange}
                    name="userPassword"
                  ></input>
                </p>
                <p>
                  <Link to="/ForgotPassword">Quên mật khẩu?</Link>
                </p>
                <button className="btn-default">Xác nhận</button>
                <NavLink to="/Register" className="pl-2">
                  Tạo tài khoản
                </NavLink>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDistpatchToProps = (distpatch) => {
  return {
    pushInfoUser: (user, history) => {
      distpatch(action.actLoginAccountApi(user, history));
    },
  };
};

export default connect(null, mapDistpatchToProps)(Login);
