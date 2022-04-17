import {useEffect, useState} from "react";
import {usersService} from "../../Services";
import {User} from "../../Components";
import {Outlet} from "react-router-dom";
import css from './UsersPage.module.css'

const UsersPage = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div className={css.wrapPost}>
            <div className={css.w55}>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={css.w40}><Outlet/></div>
        </div>
    );
};

export {UsersPage};
