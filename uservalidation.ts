import { check } from "express-validator";

export function userValidation(){
    return [
        check("username").notEmpty().withMessage("error:*Enter your username"),
        check("password").notEmpty().withMessage("error:*Enter your password"),
        check("email").notEmpty().withMessage("error:*Enter your email").isEmail().withMessage("email not valied"),
    ]
}