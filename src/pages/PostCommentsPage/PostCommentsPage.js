import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Comment} from "../../components";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(_ => {
        postsService.getCommentsByPostId(id).then(({data}) => setComments(data))
    }, [id]);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};
