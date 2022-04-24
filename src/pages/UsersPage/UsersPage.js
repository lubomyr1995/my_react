import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {User} from "../../components";
import {Outlet, useSearchParams} from "react-router-dom";
import css from './UsersPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    useEffect(_ => {
        usersService.getAll(query.get('page'), 2).then(({data}) => setUsers(data))
    }, [query]);

    let queryObj = Object.fromEntries(query.entries())

    function nextPage() {
        queryObj.page++
        setQuery(queryObj)
    }

    function prevPage() {
        queryObj.page--
        setQuery(queryObj)
    }

    return (
        <div className={css.wrapPost}>
            <div className={css.w40}>{users.map(user => <User key={user.id} user={user}/>)}
                <div style={{display: 'flex'}}>
                    <button onClick={prevPage}>Prev</button>
                    <button onClick={nextPage}>Next</button>
                </div>
            </div>
            <div className={css.w55}><Outlet/></div>
        </div>
    );
};

export {UsersPage};
