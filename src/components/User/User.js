export const User = ({user, setDetails, setPostByUserId}) => {
    const click = () => {
        setDetails(user);
        setPostByUserId(null);
    }
    return (
        <div>
            <h3>{user.name}</h3>
            <button onClick={click}>showDetails</button>
        </div>
    );
};