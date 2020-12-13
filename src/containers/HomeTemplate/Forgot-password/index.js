import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as action from "./modules/action";
import { connect } from "react-redux";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
    };
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
		});
		console.log(this.state);
	}
	
	handleSendEmail = () => {
		this.props.fecthEmail(this.state, this.props.history);
	}

  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col-12">
            <h3>Đổi mật khẩu</h3>
            <p>Chúng tôi sẽ gửi mật khẩu vào tài khoản email bạn đăng ký.</p>
            <p>
              <label>Địa chỉ Email</label>
              <input
                type="email"
                name="userEmail"
                onChange={this.handleOnchange}
              ></input>
            </p>
            <button className="btn-default mr-2" onClick={this.handleSendEmail}>
              Xác nhận
            </button>
            <Link to="/Login">Quay lại</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fecthEmail: (userEmail, history) => {
      dispatch(action.actForgotPasswordCallApi(userEmail, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(ForgotPassword);
