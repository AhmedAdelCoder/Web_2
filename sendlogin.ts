import express from "express"
import { Request,Response } from "express";
import path from "path";
import {getLoginpage} from "../controller/logincontroller"
import { loginValidtion } from "../middleware/loginVaidtion";
import { addlogin } from "../controller/logincontroller";


const loginRouter=express.Router();
loginRouter.get("/",getLoginpage)

loginRouter.post("/",loginValidtion(),addlogin)

export default loginRouter