import { BASE_URL } from "./config/ApiConfig";
import fetchRequest from "./FetchRequest";

export const verifyReset = async (verifyCode) => {
    return await fetchRequest.get(BASE_URL + "/login")
        .then((response) => {
            return response;
        }).catch((error) => {
            return error.response;
        });
};