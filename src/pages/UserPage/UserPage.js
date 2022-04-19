import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {UserDetail} from "../../components";

const UserPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [detail, setDetail] = useState(state);
    useEffect(_ => {
        if (!state) {
            usersService.getById(id).then(({data}) => setDetail(data))
        } else {
            setDetail(state)
        }
    }, [id, state])
    return (
        <div>
            {detail && <UserDetail detail={detail}/>}
            <Outlet/>
        </div>
    );
};

export {UserPage};
