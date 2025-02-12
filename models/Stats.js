const mongoose = require('mongoose');
const validator = require('validator');

const statsSchema = new mongoose.Schema({
    player: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Player', 
        required: [true, 'Player ID is required']
    },
    team: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Team', 
        required: [true, 'Team ID is required']
    },
    season: { 
        type: String, 
        required: [true, 'Season is required'], 
        validate: {
            validator: (value) => validator.matches(value, /^\d{4}-\d{4}$/),
            message: 'Season format should be YYYY-YYYY (e.g., 2023-2024)'
        }
    },
    matchesPlayed: { 
        type: Number, 
        required: [true, 'Matches played is required'], 
        min: [0, 'Matches played cannot be negative']
    },
    goals: { 
        type: Number, 
        default: 0, 
        min: [0, 'Goals cannot be negative']
    },
    assists: { 
        type: Number, 
        default: 0, 
        min: [0, 'Assists cannot be negative']
    },
    yellowCards: { 
        type: Number, 
        default: 0, 
        min: [0, 'Yellow cards cannot be negative']
    },
    redCards: { 
        type: Number, 
        default: 0, 
        min: [0, 'Red cards cannot be negative']
    },
    minutesPlayed: { 
        type: Number, 
        required: [true, 'Minutes played is required'], 
        min: [0, 'Minutes played cannot be negative']
    },
    passAccuracy: { 
        type: Number, 
        min: [0, 'Pass accuracy cannot be negative'], 
        max: [100, 'Pass accuracy cannot exceed 100'],
        validate: {
            validator: (value) => validator.isFloat(value.toString(), { min: 0, max: 100 }),
            message: 'Pass accuracy must be between 0 and 100'
        }
    },
    shotAccuracy: { 
        type: Number, 
        min: [0, 'Shot accuracy cannot be negative'], 
        max: [100, 'Shot accuracy cannot exceed 100'],
        validate: {
            validator: (value) => validator.isFloat(value.toString(), { min: 0, max: 100 }),
            message: 'Shot accuracy must be between 0 and 100'
        }
    },
    tackles: { 
        type: Number, 
        default: 0, 
        min: [0, 'Tackles cannot be negative']
    },
    cleanSheets: { 
        type: Number, 
        default: 0, 
        min: [0, 'Clean sheets cannot be negative']
    }
}, { timestamps: true });

const Stats = mongoose.model('Stats', statsSchema);
module.exports = Stats;
