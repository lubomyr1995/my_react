import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getAll: () => axiosService.get(urls.cars)
};

export {carsService};