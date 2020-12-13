import * as ActionTypes from "./constant";

let inittialState = {
	loading: false,
	data: null,
	err: null,
	keyword: "",
};

const LoadProductReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCT_REQUEST:
      state.loading = true;
      state.data = null;
			state.err = null;
			state.keyword = "";
      return { ...state };

    case ActionTypes.LOAD_PRODUCT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
			state.err = null;
			state.keyword = action.keyword;
      return { ...state };

    case ActionTypes.LOAD_PRODUCT_FAIL:
      state.loading = false;
      state.data = null;
			state.err = action.payload;
			state.keyword = "";
      return { ...state };
		
    default:
      return {...state};
  }
};

export default LoadProductReducer;
