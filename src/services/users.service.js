import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    create: (user) => axiosService.post(urls.users, user)
}

export {usersService};