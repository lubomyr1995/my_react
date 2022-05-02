import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carAction} from "../../redux/slices/car.slice";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();

    const {formErrors, carUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carUpdate) {
            const {model, price, year} = carUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [setValue, carUpdate]);

    const submit = async (newCar) => {
        if (carUpdate) {
            await dispatch(carAction.updateById({id: carUpdate.id, car: newCar}))
        } else {
            await dispatch(carAction.createAsync({car: newCar}))
        }
        reset();
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            {formErrors.model && <b>{formErrors.model}</b>}
            <div><label>price: <input type="text" {...register('price')}/></label></div>
            {formErrors.price && <b>{formErrors.price}</b>}
            <div><label>year: <input type="text" {...register('year')}/></label></div>
            {formErrors.year && <b>{formErrors.year[0]}</b>}
            <div>
                <button>{carUpdate ? 'update' : 'create'}</button>
            </div>
        </form>
    );
};

export {CarForm};
