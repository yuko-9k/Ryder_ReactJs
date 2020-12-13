// url :`http://192.168.100.77/Catalog/GetAllCatalog`

import * as ActionTypes from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
  keyword: "",
};

const listProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_PRODUCT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.LIST_PRODUCT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.LIST_PRODUCT_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listProductReducer;
