import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService(`${urls.users}/${id}`),
    getPostsByUserId: (id) => axiosService(`${urls.posts}?userId=${id}`)
};

export {usersService};
