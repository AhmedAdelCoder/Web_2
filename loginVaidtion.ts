import { check } from "express-validator";

export function loginValidtion(){
    return[
        check("email").notEmpty().withMessage("Error:Enter your Email...").isEmail().withMessage("error:is not email"),
        check("password").notEmpty().withMessage("Error:Enter your password...")
    ]
}