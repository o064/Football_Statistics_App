const mongoose = require('mongoose');
const validator = require('validator');

require('dotenv').config();
const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
        validate: [validator.isAlpha, 'First name must contain only letters']
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
        validate: [validator.isAlpha, 'Last name must contain only letters']
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return validator.isBefore(value.toISOString(), new Date().toISOString());
            },
            message: 'Date of birth must be in the past.'
        }
    },
    nationality: { type: String, required: true, trim: true },
    position: {
        type: String,
        required: true,
        enum: ['Forward', 'Midfielder', 'Defender', 'Goalkeeper']
    },
    preferredFoot: {
        type: String,
        required: true,
        enum: ['Left', 'Right', 'Both']
    },
    height: {
        type: Number,
        required: true,
        min: 140,
        max: 220
    },
    weight: {
        type: Number,
        required: true,
        min: 40,
        max: 120
    },
    currentTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    contractStartDate: { type: Date },
    contractEndDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return !this.contractStartDate || value > this.contractStartDate;
            },
            message: "Contract end date must be after start date."
        }
    }
}, { timestamps: true });

const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
