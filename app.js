const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
// const { checkUser,authAdmin,authUser} = require('./middleware/authorize');
// const customErrorMiddleware = require('./middleware/customError');
// const UserRoutes= require('./routes/userRoute');
// const AdminRoutes= require('./routes/adminRoute');
// const CartRoute= require('./routes/CartRoute');
//config
require('dotenv').config();
// public style

// database connection
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

// routes


// home page
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(PORT,()=>{
    console.log("server is listening.....................");
    })