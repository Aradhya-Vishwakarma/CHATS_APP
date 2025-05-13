import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
// import { connectDB, mongo } from "mongoose"; 
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

connectDB(mongoURI)

app.use('/user', userRoutes);

app.get("/" ,(req ,res) => {
    res.send("hello  world ")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})