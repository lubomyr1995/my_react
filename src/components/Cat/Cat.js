import {useDispatch} from "react-redux";
import {catActions} from "../../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <b>{cat.name}</b>
            <button onClick={() => dispatch(catActions.del({id: cat.id}))}>delete</button>
            <button onClick={() => dispatch(catActions.setUpdate({cat}))}>update</button>
        </div>
    );
};

export {Cat};
