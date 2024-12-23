// const express = require("express");
import express from 'express'
const app = express();
import connectDB from './dbConnection.js'
import Ticket from './schema.js';
import cors from 'cors'
import router from './routes.js';


// CORS (Cross-Origin Resource Sharing) allows your API to handle requests from different origins (domains).
// Why cors Middleware?
// Without it, browsers may block API calls from different domains.
app.use(cors());//Middleware is code that executes before your API routes or after a request is received.
//Middleware for parsing Json
app.use(express.json());//parsing json
//Connecting to Database
connectDB(); 
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", router);//Routing: This connects your application to routes defined in routes.js.
// When a request is made to /api/..., the router handles it.

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});
// app.listen: Starts the server and listens for requests on the specified port (8080).
// Callback Function: Logs a message when the server starts successfully.
