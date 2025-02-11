const express = require('express');
const route = express.Router();
const authControler = require("../controllers/userController");

route.post("/login",authControler.logIn_post);


route.get("/:id/",(req,res) => res.send("OK"));
route.put("/:id",(req,res) => res.send("OK"));
route.delete("/:id",(req,res) => res.send("OK"));

module.exports = route;
