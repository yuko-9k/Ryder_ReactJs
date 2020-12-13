import * as ActionTypes from "./constant";
import api from "../../../../api/index";

export const actGetCatalogCallApi = () => {
	return (dispatch) => {
		dispatch(actGetCatalogRequest());
		api
			.get(`Catalog/GetAllCatalog`)
			.then(result => {
				dispatch(actGetCatalogSuccess(result.data))
			})
			.catch(err => {
				dispatch(actGetCatalogFail(err))
			})
	}
}

const actGetCatalogRequest = () => {
	return {
		type:ActionTypes.GET_CATALOG_REQUEST,
	}
}

const actGetCatalogSuccess = (catalog) => {
	return {
		type: ActionTypes.GET_CATALOG_SUCCESS,
		payload:catalog,
	}
}

const actGetCatalogFail = (err) => {
	return {
		type: ActionTypes.GET_CATALOG_FAIL,
		payload:err,
	}
}