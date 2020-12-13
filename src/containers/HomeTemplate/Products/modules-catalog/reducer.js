import * as ActionTypes from "./constant";

let inittialState = {
  loading: false,
  data: null,
  err: null,
};

export const getProductCatalog = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_CATALOG_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_PRODUCT_CATALOG_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.GET_PRODUCT_CATALOG_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return{...state};
  }
};

export default getProductCatalog;