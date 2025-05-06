import { Request,Response } from "express"
import { validationResult } from "express-validator";
import path from "path";
import fs from "fs/promises"
import { User } from "../Type/interface";


export const getLoginpage=(req:Request,res:Response)=>{
        res.sendFile(path.join(__dirname, "..", "..", "public", "login.html"));
    }

export const addlogin=async (req:Request,res:Response) => {
    const result=validationResult(req)

    if(!result.isEmpty()){ // (is empty return true )== false
        res.json({"result":result.array()}) //object  call array from middelware
    }
    else{
            const read=await fs.readFile(path.join(__dirname,"..","..","./users.json"),"utf-8")
        if(!read){ //read return strin if length = 0 is empty 
            res.status(404).send("error: email is not found")
        }
        else{
            const convertJs:User[]=JSON.parse(read)
            const findUser=convertJs.find((user)=>user.email === req.body.email && user.password  === req.body.password)
            if(findUser){
                req.session.user=findUser;
                res.redirect("/")
            }
            else{
                res.status(404).send("error: email is not found")
            }
        }
    }
}