import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import swal from "sweetalert";
import setHeaders from "../../../../utils/setHeaders/index";

export const actChangePasswordReducer = (data, history) => {
  return (dispatch) => {
    dispatch(actChangePasswordRequest());
    let token = JSON.parse(localStorage.getItem("UserInfo"));
		console.log(token);	
		if (token) {
			setHeaders(token.token);
      api
        .post(`User/ChangePassword`, data)
        .then((result) => {
          console.log(result.data);
					dispatch(actChangePasswordSuccess(result.data));
					swal("Thành công", "Cập nhật mật khẩu thành công", "success");
					history.replace("/")
        })
        .catch((err) => {
					console.log(err.response.data.message);
					if (err.response.data.message === "PASSWORD DOES NOT MATCH") {
						swal("Sai thông tin", "Mật khẩu hiện tại không đúng", "error");
					}
					else if (err.response.data.message === "NEW PASSWORD DOES NOT MATCH WITH REPEAT PASSWORD") {
						swal("Sai thông tin", "Mật khẩu mới không khớp", "error");
					}
          dispatch(actChangePasswordFail(err));
        });
    }
  };
};

const actChangePasswordRequest = () => {
  return {
    type: ActionTypes.CHANGE_PASSWORD_REQUEST,
  };
};

const actChangePasswordSuccess = (data) => {
  return {
    type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};

const actChangePasswordFail = (err) => {
  return {
    type: ActionTypes.CHANGE_PASSWORD_FAIL,
    payload: err,
  };
};
