const Team = require('../models/Team');
// create team
const createTeam = async (req, res) => {
    try {
        const team = new Team(req.body);
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// get one or all teams
const getTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const team = id ? await Team.findById(id) : await Team.find();
        
        if (id && !team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// update team
const updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });
        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// delete team
const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTeam, updateTeam, deleteTeam, createTeam};
