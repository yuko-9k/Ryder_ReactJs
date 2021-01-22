import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import setHeaders from "../../../../utils/setHeaders/index";
import swal from "sweetalert";

export const actDetailApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailProductReQuest());
    api
      .get(`/Product/SelectOneProduct/${id}`)
      .then((result) => {
				dispatch(actDetailProductSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailProductFail(err));
      });
  };
};

export const actAddComment = (productID, commentText,history) => {
  return (dispatch) => {
    dispatch(actAddCommentRequest());
    const token = JSON.parse(localStorage.getItem("UserInfo"));
    if (token) {
      setHeaders(token.token);
      api
        .post("/Comment/AddComment/", { productID, commentText })
				.then((result) => {
					swal("Thành công", "Các bình luận không chuẩn mực sẽ bị gỡ bỏ", "success");
          dispatch(actAddCommentSuccess(result.data));
        })
				.catch((err) => {
					if (err.response.data.message === "Data Can Not Empty") {
						swal("Lỗi", "Bạn chưa nhập nội dung", "error");
					}
          dispatch(actAddCommentFail(err));
        });
		} else {
			swal("Lỗi!", "Vui lòng đăng nhập trước khi comment!", "error");
			history.replace("/login");
		}
  };
};

const actAddCommentRequest = () => {
  return {
    type: ActionTypes.ADD_COMMENT_REQUEST,
  };
};

const actAddCommentSuccess = (keyword) => {
  return {
    type: ActionTypes.ADD_COMMENT_SUCCESS,
    keyword,
  };
};

const actAddCommentFail = (errComment) => {
  return {
    type: ActionTypes.ADD_COMMENT_FAIL,
    errComment,
  };
};

const actDetailProductReQuest = () => {
  return {
    type: ActionTypes.DETAIL_PRODUCT_REQUEST,
  };
};

const actDetailProductSuccess = (data) => {
  return {
    type: ActionTypes.DETAIL_PRODUCT_SUCCESS,
    payload: data,
  };
};

const actDetailProductFail = (err) => {
  return {
    type: ActionTypes.DETAIL_PRODUCT_FAIL,
    payload: err,
  };
};

export const actAddProductToCart = (data) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    payload: data,
  };
};

export const actChangeValueProduct = (product, status) => {
  if (status) {
    return {
      type: ActionTypes.INCREASE_VALUE_PRODUCT_OF_CART,
      payload: product,
    };
  } else {
    return {
      type: ActionTypes.REDUCTION_VALUE_PRODUCT_OF_CART,
      payload: product,
    };
  }
};

export const actRemoveProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product,
  };
};
