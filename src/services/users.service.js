import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getUsers: () => axiosService.get(urls.users),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`)
}

export {usersService};
