import Joi from "joi";
// required - озн що поле обовязкове; message не є обовязковим) якщо не вказано ьо виведе по дефолту
const carValidator = Joi.object({
    // model: Joi.string().min(1).max(20).required().messages({
    //     'string.empty': 'model cant be empty',
    //     'string.min': 'model can be min 1 sybyl'
    // }),
    model: Joi.string().regex(/^[a-zA-ZА-Яа-яЇїІі]{1,20}$/).required().messages({
        'string.pattern.base': 'В полі є заборонені симполи чи довжина більша за 20'
    }),
    price: Joi.number().min(1).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator};
