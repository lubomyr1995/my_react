import {axiosService} from "./axios.service";
import {urls} from "../Constants";

const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    geyCommentsByPostId: (id) => axiosService.get(`comments?postId=${id}`)
};

export {postsService};
