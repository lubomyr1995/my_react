import {constants} from "../constants";

export const allService = {
    getUsers: () => fetch(constants.apiUrl + 'users').then(response => response.json()),
    getComments: () => fetch(constants.apiUrl + 'comments').then(response => response.json()),
    getPosts: () => fetch(constants.apiUrl + 'posts').then(response => response.json())
};