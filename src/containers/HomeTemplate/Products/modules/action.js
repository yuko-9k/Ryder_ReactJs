import * as ActionTypes from "./constant";
import api from "../../../../api/index";

export const actListProductApi = () => {
	return (dispatch) => {
		dispatch(actListProductRequest());
		api
			.get(`Product/SelectAllProduct`)
			.then(result => {
				dispatch(actListProductSuccess(result.data))
			})
			.catch(err => {
				dispatch(actListProductFail(err))
			})
	};
};

const actListProductRequest = () => {
  return {
    type: ActionTypes.LIST_PRODUCT_REQUEST,
  };
};

const actListProductSuccess = (data) => {
	return {
		type: ActionTypes.LIST_PRODUCT_SUCCESS,
		payload: data,
	};
};

const actListProductFail = (err) => {
	return {
		type: ActionTypes.LIST_PRODUCT_FAIL,
		payload: err,
	};
};

