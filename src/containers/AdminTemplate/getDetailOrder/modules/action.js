import * as ActionTypes from "./constant";
import setHeaders from "../../../../utils/setHeaders/index";
import api from "../../../../api/index";

export const getDetailOrderCallApi = () => {
	return (dispatch) => {
		dispatch(getDetailOrderRequest);
		const token = JSON.parse(localStorage.getItem("UserInfo"));
		if (token) {
			setHeaders(token.token);
			api
				.get(`User/GetUserCart`)
				.then(result => {
					console.log(result.data);
					dispatch(getDetailOrderSuccess(result.data));
				})
				.catch(err => {
					console.log(err);
					dispatch(getDetailOrderFail(err))
				})
		}
	}
}

const getDetailOrderRequest = () => {
	return {
		type:ActionTypes.GET_DETAIL_ORDER_REQUEST,
	}
}

const getDetailOrderSuccess = (data) => {
	return {
		type: ActionTypes.GET_DETAIL_ORDER_SUCCESS,
		payload:data,
	}
}

const getDetailOrderFail = (err) => {
	return {
		type: ActionTypes.GET_DETAIL_ORDER_FAIL,
		payload:err,
	}
}