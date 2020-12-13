import * as ActionTypes from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
  listCart: [],
  comment: "",
};

const detailProductReducer = (state = initialState, action, status) => {
  switch (action.type) {
    case ActionTypes.DETAIL_PRODUCT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.DETAIL_PRODUCT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.DETAIL_PRODUCT_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.err;
      return { ...state };

    case ActionTypes.ADD_PRODUCT_TO_CART: {
      let listCart = [...state.listCart];
      let index = listCart.findIndex(
        (item) => item.productID === action.payload.productID
      );
      if (index !== -1) {
        listCart[index].quantityProduct += 1;
      } else {
        const productNew = {
          productID: action.payload.productID,
          productName: action.payload.productName,
          productImg: action.payload.productImg,
          productPrice: action.payload.productPrice,
          productDescription: action.payload.productDescription,
					quantityProduct: 1,
        };
        listCart = [...state.listCart, productNew];
      }
      state.listCart = listCart;
      return { ...state };
    }

    case ActionTypes.INCREASE_VALUE_PRODUCT_OF_CART: {
      let listCart = [...state.listCart];
      let index = listCart.findIndex((item) => {
        return item.productID === action.payload.productID;
      });
      if (index !== -1) {
        if (listCart[index].quantityProduct > 1) {
          listCart[index].quantityProduct -= 1;
        }
      }
      state.listCart = listCart;
      return { ...state };
    }

    case ActionTypes.REDUCTION_VALUE_PRODUCT_OF_CART: {
      let listCart = [...state.listCart];
      let index = listCart.findIndex((item) => {
        return item.productID === action.payload.productID;
      });
      if (index !== -1) {
        listCart[index].quantityProduct += 1;
      }
      state.listCart = listCart;
      return { ...state };
    }

    case ActionTypes.REMOVE_PRODUCT:
      let listCart = [...state.listCart];
      let index = listCart.findIndex((item) => {
        return item.productID === action.payload.productID;
      });
      if (index !== -1) {
        listCart.splice(index, 1);
      }
      state.listCart = listCart;
      return { ...state };

    case ActionTypes.ADD_COMMENT_REQUEST:
      state.loading = true;
      state.comment = "";
      return { ...state };

    case ActionTypes.ADD_COMMENT_SUCCESS:
      state.loading = false;
      state.comment = action.keyword;
      return { ...state };

    case ActionTypes.ADD_COMMENT_FAIL:
      state.loading = false;
			state.comment = "";
			state.err = action.errComment;
      return { ...state };

    default:
      return { ...state };
  }
};

export default detailProductReducer;
