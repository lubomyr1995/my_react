const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <h6>postId: {postId}; id: {id}</h6>
            <b>name: {name}</b>
            <p>e-mail: {email}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Comment};
