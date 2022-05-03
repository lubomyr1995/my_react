import {axiosService} from "./axios.service";
import {urls} from "../constants";

const episodesService = {
    getAll: (page = 1) => axiosService.get(urls.episode, {params: {page}})
};

export {episodesService};