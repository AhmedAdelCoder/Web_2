import express from "express"
import { Request,response } from "express"
import {getData} from "../controller/sessionController"
const sessionRouter=express.Router();


sessionRouter.get("/",getData)








export default sessionRouter;