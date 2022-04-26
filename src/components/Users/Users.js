import {useSelector} from "react-redux";
import {User} from "../User/User";

const Users = () => {
    const {users} = useSelector(state => state.users);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
