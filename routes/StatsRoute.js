const express = require('express');
const route = express.Router();
const {getStatsById,createStats} = require('../controllers/StatsController');

route.get("/player/:id",getStatsById);
route.post('/', createStats); // add  stats

module.exports = route;
