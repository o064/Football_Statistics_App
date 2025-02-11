const express = require('express');
const app = express();
const path = require('path');

//config
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// database connection
const mongoose = require('mongoose');

// middleware
app.use(express.json());


// routes


// home page
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(PORT,()=>{
    console.log("server is listening.....................");
    })