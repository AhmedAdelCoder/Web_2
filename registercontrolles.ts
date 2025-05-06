import  express, { json } from "express";
import { validationResult } from "express-validator"; 
import { User } from "../Type/interface";
import { Request,Response } from "express"

import fs from "fs/promises"
import { promises } from "dns";
//import { readFile } from "fs";
import path from "path";

//display  meassage valdtion maiddelware
export const adduser= async (req:Request,res:Response) =>{
    const result=validationResult(req)
//error send from middleware
    if(!result.isEmpty())
        res.json({"result":result.array()})
    else{
        //res.json(req.body)
        const save=await fs.readFile(path.join(__dirname,"..","..","./users.json"),"utf-8")

        if(!save){
            await fs.writeFile(path.join(__dirname,"..","..","./users.json"),JSON.stringify([req.body],null,2),"utf-8")
        }
        else{
            const convertSave=JSON.parse(save)
            await fs.writeFile(path.join(__dirname,"..","..","./users.json"),JSON.stringify([...convertSave,req.body],null,6),"utf-8")
        }
        //res.send(convertSave)
        res.redirect("/login")
    }
}

