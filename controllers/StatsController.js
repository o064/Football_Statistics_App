const Stats = require('../models/Stats');

// Get stats by ID
const getStatsById = async (req, res) => {
    try {
        const { id } = req.params;
        const stats = await Stats.findById(id)
            .populate('player', 'firstName lastName position') // Populating player details
            .populate('team', 'name league'); // Populating team details
        if (!stats) {
            return res.status(404).json({ message: 'Stats not found' });
        }
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// create stats
const createStats = async (req, res) => {
    try {
        const stats = new Stats(req.body);
        await stats.save();
        res.status(201).json(stats);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports = { getStatsById, createStats };
