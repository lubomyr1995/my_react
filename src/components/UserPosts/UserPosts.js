const UserPosts = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <b>userId: {userId}; id: {id}</b>
            <h3>{title}</h3>
            <p>{body}</p>
            <hr/>
        </div>

    );
};

export {UserPosts};
