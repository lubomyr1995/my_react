import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: (page, _limit = 2) => axiosService.get(urls.posts, {
        params: {
            _start: (page-1)*_limit,
            _limit
        }
    }),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getCommentsByPostId: (id) => axiosService.get(`comments?postId=${id}`)
};

export {postsService};
