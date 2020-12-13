import { combineReducers } from "redux";
import listProductReducer from "../../containers/HomeTemplate/Products/modules/reducer";
import LoginReducer from "../../containers/HomeTemplate/Login/modules/reducer";
import detailProductReducer from "../../containers/HomeTemplate/DetailProduct/modules/reuducer";
import LoadProductReducer from "../../containers/Components/ModalSearch/modules/reducer";
import cartReducer from "../../containers/Components/ModalCart/modules/reducer";
import catalogReducer from "../../containers/Components/Catalog/modules/reducer";
import getCommentReducer from "../../containers/HomeTemplate/DetailProduct/comment/modules/reducer";
import getDetailOrderReducer from "../../containers/AdminTemplate/getDetailOrder/modules/reducer";
import getProductCatalog from "../../containers/HomeTemplate/Products/modules-catalog/reducer";

const rootReducer = combineReducers({
	listProductReducer,
	LoginReducer,
	detailProductReducer,
	LoadProductReducer,
	cartReducer,
	catalogReducer,
	getCommentReducer,
	getDetailOrderReducer,
	getProductCatalog,
});

export default rootReducer;
