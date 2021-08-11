import axios from "axios";

const api = axios.create({
	baseURL: "https://lita12.herokuapp.com/",
});
export { api } 