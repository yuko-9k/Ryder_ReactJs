import * as ActionTypes from "./constant";
import api from "../../../../api/index";
import swal from "sweetalert";

export const actRegisterAccountCallApi = (user,history) => {
  return (dispatch) => {
    dispatch(actRegisterAccountRequest());
		api
			.post(`Authorization/Register/Memer`,user)
      .then((result) => {
        console.log(result.data);
        dispatch(actRegisterAccountSuccess(result.data));
				swal("Good job!", "You Register Account SuccessFul!", "success");
				history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        dispatch(actRegisterAccountFail(err));
      });
  };
};

const actRegisterAccountRequest = () => {
  return {
    type: ActionTypes.REGISTER_ACCOUNT_REQUEST,
  };
};

const actRegisterAccountSuccess = (data) => {
  return {
    type: ActionTypes.REGISTER_ACCOUNT_SUCCESS,
    payload: data,
  };
};

const actRegisterAccountFail = (err) => {
  return {
    type: ActionTypes.REGISTER_ACCOUNT_FAIL,
    payload: err,
  };
};
