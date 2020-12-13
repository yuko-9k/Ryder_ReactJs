import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import setHeaders from "../../../../utils/setHeaders/index";
import swal from "sweetalert";

export const actSendCart = (data, history) => {
  return (dispatch) => {
    dispatch(actSendCartRequest());
    const token = JSON.parse(localStorage.getItem("UserInfo"));
    if (token) {
      setHeaders(token.token);
      api
        .post(`/Cart/AddCart`, data)
        .then((result) => {
          console.log(result.data);
          swal("Thành công!!!", "Đặt hàng thành công", "success");
          history.replace("/");
          dispatch(actSendCartSuccess(result.data));
        })
        .catch((err) => {
          console.log(err.response);
					if (err.response.data.message === "Data Can Not Empty" || err.response.data.message === "Keys Invalid") {
						swal("Lỗi", "Bạn chưa nhập thông tin", "error");
          }
          dispatch(actSendCartFail(err));
        });
    } else {
      swal("Lỗi!", "Vui lòng đăng nhập trước!", "error");
      history.replace("/login");
    }
  };
};

const actSendCartRequest = () => {
  return {
    type: ActionTypes.SEND_CART_REQUEST,
  };
};

const actSendCartSuccess = (data) => {
  return {
    type: ActionTypes.SEND_CART_REQUEST,
    payload: data,
  };
};

const actSendCartFail = (err) => {
  return {
    type: ActionTypes.SEND_CART_REQUEST,
    payload: err,
  };
};
