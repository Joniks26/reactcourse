import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ebba4e3e-4d31-4d1c-bffe-77bc29479289"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}

export const loginAPI = {
    getLogin() {
        return instance.get(`auth/me/`)
            .then(response => {
                return response.data;
            });
    }
}


// см урок 63