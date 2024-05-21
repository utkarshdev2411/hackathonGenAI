import express from 'express'
import { createUser, loginUser, logout,userMiddleware,getCurrentUser } from "../controller/user.controller.js";

const userRoute=express.Router();


userRoute
.get('/details',userMiddleware,getCurrentUser)
.post('/register',createUser)
.post('/login',loginUser)
.get('/logout',logout)

export default userRoute