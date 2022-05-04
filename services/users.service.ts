import axios, {AxiosResponse} from "axios";
import {UserInterface} from "../interfaces";

type AxiosType<T> = Promise<AxiosResponse<T>>

const usersService = {
    getAll: (): AxiosType<UserInterface[]> => axios.get('https://jsonplaceholder.typicode.com/users')
}

export {usersService}