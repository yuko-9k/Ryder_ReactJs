import * as ActionTypes from "./constant";

let inittialstate = {
  loading: false,
  data: null,
  err: null,
};

const getCommentReducer = (state = inittialstate, action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_COMMENT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_COMMENT_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return{...state};
  }
};

export default (getCommentReducer);
