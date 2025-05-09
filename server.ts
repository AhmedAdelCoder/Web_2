import express, { json } from "express";
import router from "../router/declration"
import registerRouter from "../router/register"
import loginRouter from "../router/sendlogin";
import path from "path"
import session from "express-session";
import sessionRouter  from "../router/sessionenter";
const server=express();
server.use(express.static('public'));
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized: false,
}));

server.use("/",router)
server.use("/register",registerRouter)
server.use("/login",loginRouter)
server.use("/session",sessionRouter)

const port=7000;
server.listen(port,()=>{
    console.log(`server is runing port ${port}`)
})



