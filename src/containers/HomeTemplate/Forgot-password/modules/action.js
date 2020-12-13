import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import swal from "sweetalert";

export const actForgotPasswordCallApi = (userEmail,history) => {
	return (dispatch)=> {
		actForgotPasswordRequest();
		console.log(userEmail);
		api
			.post(`ForgotPassword/ResetPassword`, userEmail)
			.then(result => {
				console.log(result.data);
				swal("Good job!", "Xin Vui lòng kiểm tra lại email!", "success");
				history.replace("/login");		
				dispatch(actForgotPasswordSuccess(result.data))
			})
			.catch(err => {
				console.log(err);
				dispatch(actForgotPasswordFail(err));
			})

	}
}

const actForgotPasswordRequest = () => {
	return {
		type:ActionTypes.FORGOT_PASSWORD_REQUEST,
	}
}

const actForgotPasswordSuccess = (data) => {
	return {
		type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
		payload:data,
	}
}

const actForgotPasswordFail = (err) => {
	return {
		type: ActionTypes.FORGOT_PASSWORD_FAIL,
		payload:err,
	}
}