const express = require('express');
const router = express.Router();
const playerController = require('../controllers/PlayerController');

router.get('/:id?', playerController.getPlayer); // Get single/all players
router.post('/', playerController.createPlayer); // add  player
router.put('/:id', playerController.updatePlayer); // Update player
router.delete('/:id', playerController.deletePlayer); // Delete player

module.exports = router;
