import axios from "axios";
import { TOKEN_STORAGE_ID } from "./App.js"

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class BusinessApi {
    static async request(endpoint, params = {}, verb = "get") {

        let _token = localStorage.getItem(TOKEN_STORAGE_ID);

        console.debug("API Call:", endpoint, params, verb);

        let q;

        if (verb === "get") {
            q = axios.get(
                `${BASE_URL}/${endpoint}`, {
                params: { _token, ...params }
            });
        } else if (verb === "post") {
            q = axios.post(
                `${BASE_URL}/${endpoint}`, { _token, ...params });
        } else if (verb === "patch") {
            q = axios.patch(
                `${BASE_URL}/${endpoint}`, { ...params });
        } else if (verb === "delete") {
            q = axios.delete(
                `${BASE_URL}/${endpoint}`, { params: { _token } });
        }

        try {
            return (await q).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getCompanies(name) {
        let res = await this.request("companies", { name });
        return res.companies;
    }

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    static async getMenu(username) {
        let res = await this.request(`businesses/${username}`);
        return res.menu;
    }
    static async deleteDish(username, id) {
        let res = await this.request(`businesses/${username}/${id}`, {}, "delete");

        return res;
    }

    static async postDish(username, data) {
        let res = await this.request(`businesses/${username}`, data, "post");
        return res;
    }

    static async login(data) {
        let res = await this.request(`auth/token`, data, "post");
        return res.token;
    }

    static async register(data) {
        let res = await this.request(`auth/register`, data, "post");
        return res.token;
    }

    static async getCurrentUser(username) {
        let res = await this.request(`businesses/profile/${username}`);
        return res.user.username;
    }

    static async saveProfile(username, data) {
        let res = await this.request(`users/${username}`, data, "patch");
        return res.user;
    }
}


export default BusinessApi;
