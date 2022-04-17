import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPostsByUserId: (id) => axiosService(`${urls.posts}?userId=${id}`)
};

export {usersService};
