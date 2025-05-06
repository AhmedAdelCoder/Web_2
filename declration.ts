import express from "express"
import { getHome} from "../controller/homeControllers";

const router=express.Router();


router.get("/",getHome)


export default router;