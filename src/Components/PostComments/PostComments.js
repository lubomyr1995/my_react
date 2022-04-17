import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../Services";
import {Comment} from "../Comment/Comment";

const PostComments = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        // if (!state) {
            postsService.geyCommentsByPostId(id).then(({data}) => setComments(data))
        // } else {
        //     setComments(state)
        // }
    }, [id]);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostComments};
