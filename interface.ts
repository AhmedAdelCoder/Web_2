
export  interface User{
    name:"string",
    email:"string",
    password:"string"
}

declare module "express-session"{
    interface SessionData{
        user:User
    }
}
