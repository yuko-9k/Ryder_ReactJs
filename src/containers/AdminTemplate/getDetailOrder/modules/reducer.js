import * as ActionTypes from "./constant";

let inittialState = {
  loading: false,
  data: null,
  err: null,
};

export const getDetailOrderReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_DETAIL_ORDER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_DETAIL_ORDER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_DETAIL_ORDER_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return{...state};
  }
};

export default getDetailOrderReducer;
