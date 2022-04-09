export const User = ({user, setDetails}) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <button onClick={() => {setDetails(user)}}>showDetails</button>
        </div>
    );
};