import {User} from "../User/User";
import {useEffect, useState} from "react";
import {usersService} from "../../services";

export const Users = ({setDetails}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getUsers().then(value => setUsers(value.data));
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setDetails={setDetails}/>)}
        </div>
    );
};