import axios from 'axios';
import baseURL from "../Constants/urls";

let axiosService = axios.create({baseURL});

export {axiosService};