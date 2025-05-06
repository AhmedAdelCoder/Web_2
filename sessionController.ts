import { Request,Response } from "express";


export const getData=(req:Request,res:Response) => {
    const userData=req.session.user;
    if(userData){
        res.json(userData)
    }
    else{
        res.json({"error":"undefine"})
    }
    
}