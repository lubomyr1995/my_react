import {NavLink, Outlet, useNavigate} from "react-router-dom";
import css from './MainLayout.module.css'

const MainLayout = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/home'}>HOME</NavLink>
                <NavLink to={'/users'}>USERS</NavLink>
                <NavLink to={'/posts'}>POSTS</NavLink>
                <NavLink to={'/about'}>ABOUT</NavLink>
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
