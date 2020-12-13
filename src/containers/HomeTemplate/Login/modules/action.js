import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import swal from "sweetalert";

export const actLoginAccountApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginAccountRequest());  
		api
			.post(`/Authorization/Login`, user)
			.then((result) => {
				    console.log(result.data);
				    dispatch(actLoginAccountSuccess(result.data));
				    localStorage.setItem("UserInfo", JSON.stringify(result.data));
				    swal("Thành công!", "Đăng nhập thành công!", "success");
				    history.replace("/userPage");
				  })
				  .catch((err) => {
						console.log(err);
						if (err.response?.status === 400) {
							swal("Lỗi", "Tài khoản chưa được đăng ký", "error");
						}
						dispatch(actLoginAccountFail(err));
				  });
  };
};

export const actLogout = (history) => {
	localStorage.removeItem("UserInfo");
	swal("Thành công!", "Đăng xuất thành công!", "success");
  history.replace("/");
  return {
    type: ActionTypes.LOGOUT_ACCOUNT,
  };
};

const actLoginAccountRequest = () => {
  return {
    type: ActionTypes.LOGIN_ACCOUNT_REQUEST,
  };
};

const actLoginAccountSuccess = (data) => {
  return {
    type: ActionTypes.LOGIN_ACCOUNT_SUCCESS,
    payload: data,
  };
};

const actLoginAccountFail = (err) => {
  return {
    type: ActionTypes.LOGIN_ACCOUNT_FAIL,
    payload: err,
  };
};
