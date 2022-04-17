import {Button} from "../Button/Button";

const PostDetail = ({post}) => {
    let {userId, id, title, body} = post;
    return (
        <div>
            <b>userId: {userId}; id: {id}</b>
            <h3>{title}</h3>
            <p>{body}</p>
            <Button to={`comments?postId=${userId}`} state={post}>Get Comments</Button>
        </div>
    );
};

export {PostDetail};
