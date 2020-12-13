import axios from "axios";

export default axios.create({
	baseURL: "http://104.215.156.152/poly_project/",
	// baseURL:"http://192.168.100.34/poly_project"
	// baseURL: "http://172.20.10.3/poly_project"
});
