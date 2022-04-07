import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {User} from "../User/User";

export const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value.data))
    }, []);

    const showUser = async (id) => {
        await usersService.getById(id).then(value => setUser(value.data))
    }
    return (
        <div>
            {user && <div>{user.name}</div>}
            {users.map(user => <User key={user.id} item={user} showUser={showUser} getUser={getUser}/>)}
        </div>
    );
};