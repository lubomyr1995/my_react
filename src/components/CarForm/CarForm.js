import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";

const CarForm = () => {
    const dispatch = useDispatch();
    const {formErrors} = useSelector(state => state.cars);
    // console.log(formErrors)
    const {reset, register, handleSubmit} = useForm();
    const submit = async (newCar) => {
        // console.log(newCar)
        dispatch(carActions.createAsync({car: newCar}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            {formErrors.model && <div>{formErrors.model[0]}</div>}
            <div><label>price: <input type="text" {...register('price')}/></label></div>
            {formErrors.price && <div>{formErrors.price[0]}</div>}
            <div><label>year: <input type="text" {...register('year')}/></label></div>
            {formErrors.year && <div>{formErrors.year[0]}</div>}

            <button>send</button>
        </form>
    );
};

export {CarForm};
