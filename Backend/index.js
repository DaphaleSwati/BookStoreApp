// const express = require("express");
// const app = express();

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./Route/book.route.js";
import userRoute from "./Route/user.route.js";
const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());        //body data parse into json

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURI
//connection to mongodb

try{
    mongoose.connect(URI);
    console.log("Connected to mongodb");
}catch(error){
    console.log("Error:",error);
}

//defining routed
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello this is backend");
})
app.listen(port,()=>{
    console.log(`App listen at ${port}`);
});