import {NavLink, Outlet, useNavigate} from "react-router-dom";
import css from './MainLayout.module.css'
import {useAuth} from "../../hooks";

const MainLayout = () => {
    let navigate = useNavigate();
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/home'>HOME</NavLink>
                <NavLink to='/users'>USERS</NavLink>
                <NavLink to='/posts' replace>POSTS</NavLink>
                <NavLink to='/about'>ABOUT</NavLink>
                {user && <h1>{user}
                    <button onClick={() => logOut(() => navigate('/'))}>logOut</button>
                </h1>}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={() => navigate(-1)}>prev</button>
                <button onClick={() => navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
