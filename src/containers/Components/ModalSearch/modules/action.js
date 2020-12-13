import * as ActionTypes from "./constant";
import api from "../../../../api/index";



export const actLoadProductCallApi = (keyword) => {
	return (dispatch) => {
		dispatch(actLoadProductRequest());
		api
			.get(`/Search/Searching/${keyword}`)
			.then((result) => {
					dispatch(actLoadProductSuccess(result.data, keyword));
			})
			.catch((err) => {
				console.log(err);
				dispatch(actLoadProductFail(err));
			});
	};
}

const actLoadProductRequest = () => {
	return {
		type: ActionTypes.LOAD_PRODUCT_REQUEST,
	};
};

const actLoadProductSuccess = (data,keyword) => {
	return {
		type: ActionTypes.LOAD_PRODUCT_SUCCESS,
		payload: data,
		keyword,
	};
};

const actLoadProductFail = (err) => {
	return {
		type: ActionTypes.LOAD_PRODUCT_FAIL,
		payload:err,
	};
};