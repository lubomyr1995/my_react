import React, {useEffect, useState} from 'react';
import {User} from "../user/User";
import {allService} from "../../services";

export const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(_ => {
        allService.getUsers().then(value => setUsers(value))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} item={user}/>)}
        </div>
    );
};