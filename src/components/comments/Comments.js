import React, {useEffect, useState} from 'react';
import {allService} from "../../services";
import {Comment} from "../comment/Comment";

export const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(_ => {
        allService.getComments().then(value => setComments(value.slice(0, 10)));
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} item={comment}/>)}
        </div>
    );
};