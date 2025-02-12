const express = require('express');
const route = express.Router();


route.get("/:id/",(req,res) => res.send("OK"));
route.put("/:id",(req,res) => res.send("OK"));
route.delete("/:id",(req,res) => res.send("OK"));

module.exports = route;
