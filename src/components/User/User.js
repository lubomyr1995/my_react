export const User = ({item, showUser, getUser}) => {
    const {id, name} = item
    return (
        <div>
            <h4>{id}. {name}</h4>
            <button onClick={() => {
                showUser(id)
                getUser(item)
            }}>details
            </button>
            <hr/>
        </div>
    );
};