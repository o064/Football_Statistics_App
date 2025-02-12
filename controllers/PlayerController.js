const Player = require('../models/Player');
//Create player 
const createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get one or all teams 
const getPlayer = async (req, res) => {
    try {
        const { id } = req.params;
        // if id is passed get the player by id else get all players 
        const player = id ? await Player.findById(id).populate('currentTeam') : await Player.find().populate('currentTeam');
        if (!player){
            return res.status(404).json({ message: "Player not found." });
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// update player
const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPlayer = await Player.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedPlayer) {
            return res.status(404).json({ message: "Player not found." });
        }
        res.status(200).json(updatedPlayer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// delete player
const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPlayer = await Player.findByIdAndDelete(id);
        if (!deletedPlayer){
            return res.status(404).json({ message: "Player not found." });
        } 
        res.status(200).json({ message: "Player deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getPlayer,
    updatePlayer,
    deletePlayer,
    createPlayer
};
