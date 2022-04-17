import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../Services";
import {UserDetail} from "../../Components";

const UserPage = () => {
    let {id} = useParams();
    let {state} = useLocation();
    const [user, setUser] = useState(state);
    useEffect(() => {
        if (!state) {
            usersService.getById(id).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [id, state]);
    return (
        <div>
            {user && <UserDetail user={user}/>}
            <Outlet/>
        </div>
    );
};

export {UserPage};

