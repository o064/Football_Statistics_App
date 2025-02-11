const express = require('express');
const route = express.Router();


route.get("/player/:id",(req,res) => res.send("OK"));

module.exports = route;
