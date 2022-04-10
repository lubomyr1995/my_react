export const Details = ({details, setPostByUserId}) => {
    const {id, name, username, email, phone, website} = details
    return (
        <div>
            <hr/>
            <div>{id}. name: <b>{name}</b></div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <button onClick={() => {
                setPostByUserId(id)
            }}>getPosts
            </button>
        </div>
    );
};