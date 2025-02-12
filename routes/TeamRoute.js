const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/TeamController');

router.get('/:id?', TeamController.getTeam); // get single/all team
router.post('/', TeamController.createTeam); // add  team
router.put('/:id', TeamController.updateTeam); // update team
router.delete('/:id', TeamController.deleteTeam); // delete team

module.exports = router;
