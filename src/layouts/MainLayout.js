import {NavLink, Outlet} from "react-router-dom";

import  css from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/cars'}>Cars</NavLink>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
