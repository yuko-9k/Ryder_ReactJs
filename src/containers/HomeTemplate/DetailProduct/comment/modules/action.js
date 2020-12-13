import * as ActionTypes from "./constant";
import api from "../../../../../api/index";

export const actGetCommetCallApi = (id) => {
	return (dispatch)=>{
		dispatch(actGetCommetRequest);
		api
			.get(`Comment/SelectCommentProduct/${id}`)
			.then(result => {
				dispatch(actGetCommetSuccess(result.data))
			})
			.catch(err => {
				dispatch(actGetCommetFail(err))
			})
	}
}

const actGetCommetRequest = () => {
	return {
		type:ActionTypes.GET_COMMENT_REQUEST,
	}
}

const actGetCommetSuccess = (data) => {
	return {
		type: ActionTypes.GET_COMMENT_SUCCESS,
		payload:data,
	}
}

const actGetCommetFail = (err) => {
	return {
		type: ActionTypes.GET_COMMENT_REQUEST,
		payload:err,
	}
}