import Joi from "joi";
export const schema = Joi.object({
    email:Joi.string().email({tlds:{allow: false}}).required().min(5),
    password: Joi.string().required().pattern(/\w\d.{4,}/),
    username:Joi.string().optional().min(3)
})

export const baseUrl = "http://localhost:4000"