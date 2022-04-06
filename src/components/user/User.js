export const User = ({item: {id, name, username, email}}) => {
    return (
        <div>
            <h2>{id}. {name}</h2>
            <b>username: {username}</b>
            <b>email: {email}</b>
            <hr/>
        </div>
    );
};