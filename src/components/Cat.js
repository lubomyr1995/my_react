import {useDispatch} from "react-redux";

import {catActions} from "../redux";

const Cat = ({cat}) => {
    const {id, name} = cat;
    const dispatch = useDispatch();
    return (
        <div>
            <b>{name}</b>
            <button onClick={() => {
                dispatch(catActions.del({id}))
            }}>delete
            </button>
            <button onClick={() => {
                dispatch(catActions.setUpdate({cat}))
            }}>update
            </button>
        </div>
    );
};

export {Cat};
