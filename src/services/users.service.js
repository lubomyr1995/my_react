import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll: (page, _limit = 2) => axiosService.get(urls.users, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }),
    getById: (id) => axiosService(`${urls.users}/${id}`),
    getPostsByUserId: (id) => axiosService(`${urls.posts}?userId=${id}`)
};

export {usersService};
