import * as ActionTypes from "./constant";

let inittialState = {
  loading: false,
  data: null,
  err: null,
};

const cartReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.SEND_CART_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.SEND_CART_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
			return { ...state };
		
    case ActionTypes.SEND_CART_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return {...state};
  }
};

export default cartReducer;