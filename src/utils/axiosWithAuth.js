import axios from "axios";
import fetchTokenLocal from "./fetchTokenLocal";

const BASE_URL = 'https://howtoapi.herokuapp.com'

function axiosWithAuth() {
    const token = fetchTokenLocal();
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: token
        }
    })
};

export default axiosWithAuth;