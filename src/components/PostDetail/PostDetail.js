const PostDetail = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>{id})</h3>
            <b>{title}</b>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {PostDetail};
