import api from "../../api/index";

const setHeaders = (token) => {
	if (token) {
		api.defaults.headers.common["Authorization"] =  `${token}`;
	} else {
		delete api.defaults.headers.common["Authorization"];
	}
}

export default setHeaders;