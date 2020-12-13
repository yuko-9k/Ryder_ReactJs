import * as ActionTypes from "./constant";

let inittialState = {
  loading: false,
  catalog: [],
  err: null,
};

const catalogReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATALOG_REQUEST:
      state.loading = true;
      state.catalog = [];
      state.err = null;
      return { ...state };

    case ActionTypes.GET_CATALOG_SUCCESS:
      state.loading = false;
      state.catalog = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_CATALOG_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return{...state};
  }
};

export default (catalogReducer);