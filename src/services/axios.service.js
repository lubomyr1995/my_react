import axios from 'axios';
import {createBrowserHistory} from 'history';

import {baseURL} from "../constants";
import {authService} from "./auth.service";

let axiosService = axios.create({baseURL});

let isRefreshing = false;
axiosService.interceptors.request.use((config) => {
    const access = localStorage.getItem('access');
    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})
const history = createBrowserHistory();

axiosService.interceptors.response.use(
    (config) => {
        return config
    },
    async (errors) => {
        const refreshT = localStorage.getItem('refresh');
        if (errors.response?.status === 401 && errors.config && !isRefreshing && refreshT) {
            isRefreshing = true
            try {
                const {data} = await authService.refresh(refreshT);
                const {access, refresh} = data;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            } catch (e) {
                localStorage.clear();
                history.replace('/login?expSession=true')
            }
            isRefreshing = false
            return axiosService.request(errors.config)
        }
        return Promise.reject(errors)
    }
)

export {axiosService, history};