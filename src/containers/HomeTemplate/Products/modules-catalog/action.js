import * as ActionTypes from "./constant";
import api from "../../../../api/index";

export const actGetProductCatalogCallApi = (idCaltalog) => {
	return (dispatch)=> {
		dispatch(actGetProductCatalogRequest());
		api
			.get(`/Product/SelectProductCatalog/${idCaltalog}`)
			.then(result => {
				console.log(result.data);
				dispatch(actGetProductCatalogSuccess(result.data));
			})
			.catch(err => {
				console.log(err);
				dispatch(actGetProductCatalogFail(err));
			})
	}
}

const actGetProductCatalogRequest = () => {
	return {
		type:ActionTypes.GET_PRODUCT_CATALOG_REQUEST,
	}
}

const actGetProductCatalogSuccess = (data) => {
	return {
		type: ActionTypes.GET_PRODUCT_CATALOG_SUCCESS,
		payload:data,
	}
}

const actGetProductCatalogFail = (err) => {
	return {
		type: ActionTypes.GET_PRODUCT_CATALOG_FAIL,
		payload:err,
	}
}