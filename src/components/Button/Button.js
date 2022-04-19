import {Link} from "react-router-dom";
import css from './Button.module.css'
const Button = ({children, to, state, ...arg}) => {
    return (
        <div>
            <Link to={to} state={state}>
                <button className={css.button} {...arg}>{children}</button>
            </Link>
        </div>
    );
};

export {Button};
