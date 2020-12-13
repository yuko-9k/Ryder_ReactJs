import * as ActionTypes from "./constant";

let initialState = {
	loading: false,
	data: null,
	err: null,
};

const LoginReducer = (state = initialState, action)=>{
	switch (action.type) {
		case ActionTypes.LOGIN_ACCOUNT_REQUEST:
			state.loading = true;
			state.data = null;
			state.err = null;
			return { ...state };
		
		case ActionTypes.LOGIN_ACCOUNT_SUCCESS:
			state.loading = false;
			state.data = action.payload;
			state.err = null;
			return { ...state };
			
		case ActionTypes.LOGIN_ACCOUNT_FAIL:
			state.loading = false;
			state.data = null;
			state.err = action.payload;
			return { ...state };
		
		case ActionTypes.LOGOUT_ACCOUNT:
			state.loading = false;
			state.data = null;
			state.err = null;
			return { ...state };
		
		default:
			return{...state};
	}
}

export default LoginReducer;