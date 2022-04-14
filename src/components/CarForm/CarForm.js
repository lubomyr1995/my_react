import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {carsService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, carUpdate, setUpdatedCar, setCarUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    // const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (carUpdate) {
            const {model, price, year} = carUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carUpdate]);

    async function submit(car) {
        try {
            if (carUpdate) {
                // console.log(carUpdate.id)
                const {data} = await carsService.updateById(carUpdate.id, car)
                setUpdatedCar(data)
                setCarUpdate(false)
            } else {
                const {data} = await carsService.create(car)
                // console.log(data)
                setNewCar(data)
            }

            reset()
        } catch (e) {
            // setFormErrors(e.response.data)
        }
    }

    const resetForm = () => {
        reset();
        setCarUpdate(false)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formErrors.model && <span>{formErrors.model[0]}</span>}*/}
            <div><label>Price<input type="text" {...register('price')}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formErrors.price && <span>{formErrors.price[0]}</span>}*/}
            <div><label>Year<input type="text" {...register('year')}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formErrors.year && <span>{formErrors.year[0]}</span>}*/}
            <div>
                <button disabled={!isValid}>{carUpdate ? 'update' : 'create '}</button>
                {!!carUpdate && <button onClick={resetForm}>Reset</button>}
            </div>
        </form>
    );
};