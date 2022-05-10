import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const {reset ,register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const submit = async (car) => {
       await dispatch(carActions.createAsync({car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            <div><label>price: <input type="text" {...register('price')}/></label></div>
            <div><label>year: <input type="text" {...register('year')}/></label></div>
            <button>create</button>
        </form>
    );
};

export {CarForm};
