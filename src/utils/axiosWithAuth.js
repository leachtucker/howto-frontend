import axios from "axios";
import fetchTokenLocal from "./fetchTokenLocal";

function axiosWithAuth() {
    const token = fetchTokenLocal();
    return axios.create({
        headers: {
            authorization: token,
        }
    })
};

export default axiosWithAuth;