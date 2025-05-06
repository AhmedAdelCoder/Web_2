import  express from "express";
import {adduser} from "../controller/registercontrolles"
import {userValidation} from "../middleware/uservalidation"
const registerRouter =express.Router();
import path from "path";

registerRouter.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","..","/public/register.html"))
})

// call middelware
registerRouter.post("/",userValidation(),adduser)

export default registerRouter