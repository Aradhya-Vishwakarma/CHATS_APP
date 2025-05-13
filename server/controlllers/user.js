import express from "express";
import { login } from "../controlllers/userController.js";
import userRoutes from "./user.js";


const login = (res ,req) =>{
    res.send("hello world ");
};

export { login};
