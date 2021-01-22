import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import * as act from "./modules/action";
import { connect } from "react-redux";

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userRegister: {
				userName: "",
				userPassword: "",
				name: "",
				userEmail:"",
			}
		}
	}

	handleOnChange = (e) => {
		let { name, value } = e.target;
		this.setState({
			userRegister: { ...this.state.userRegister, [name]: value },
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.userRegister);
		this.props.pushRegisterInfo(this.state.userRegister,this.props.history);
	}

	render() {
		return (
			<div>
				 <section className="container login">
          <div className="row">
            <div className="col-12">
              <form id="formLogin" onSubmit={this.handleOnSubmit}>
                <h3>Tạo tài khoản</h3>
                <p>
                  <label>Tài khoản</label>
                  <input
                    type="text"
                    placeholder="Tên tài khoản"
										name="userName"
										onChange={this.handleOnChange}
                  ></input>
                </p>
                <p>
                  <label>Mật khẩu</label>
                  <input
                    type="password"
										name="userPassword"
										onChange={this.handleOnChange}
                  ></input>
								</p>
								<p>
                  <label>Họ và tên</label>
                  <input
                    type="text"
										name="name"
										onChange={this.handleOnChange}
                  ></input>
								</p>
								<p>
                  <label>Địa chỉ email</label>
                  <input
                    type="email"
										name="userEmail"
										onChange={this.handleOnChange}
                  ></input>
                </p>
                <button className="btn-default">Xác nhận</button>
                <NavLink to="/Login" className="pl-2">
                  Đã có tài khoản?
                </NavLink>
              </form>
            </div>
          </div>
        </section>
			</div>
		)
	}
}

const mapDistpatchToProps = (distpatch)=>{
	return {
		pushRegisterInfo: (data,history) => {
			distpatch(act.actRegisterAccountCallApi(data,history));
		},
	};
};

export default connect(null,mapDistpatchToProps)(Register);