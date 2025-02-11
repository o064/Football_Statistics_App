const mongoose = require('mongoose');
const validator = require('validator');

const teamSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Team name is required'], 
        unique: true, 
        trim: true, 
        minlength: [3, 'Team name must be at least 3 characters long'], 
        maxlength: [100, 'Team name cannot exceed 100 characters']
    },
    foundedYear: { 
        type: Number, 
        required: [true, 'Founded year is required'], 
        min: [1850, 'Founded year must be after 1850'], 
        max: [new Date().getFullYear(), 'Founded year cannot be in the future']
    },
    stadiumName: { 
        type: String, 
        required: [true, 'Stadium name is required'], 
        trim: true, 
        minlength: [3, 'Stadium name must be at least 3 characters long']
    },
    stadiumCapacity: { 
        type: Number, 
        required: [true, 'Stadium capacity is required'], 
        min: [1000, 'Stadium capacity must be at least 1,000'], 
        max: [150000, 'Stadium capacity cannot exceed 150,000']
    },
    managerName: { 
        type: String, 
        required: [true, 'Manager name is required'], 
        trim: true, 
        minlength: [3, 'Manager name must be at least 3 characters long'], 
        maxlength: [50, 'Manager name cannot exceed 50 characters'],
        validate: {
            validator: (value) => validator.isAlpha(value.replace(/\s/g, '')),
            message: 'Manager name must contain only letters'
        }
    },
    league: { 
        type: String, 
        required: [true, 'League name is required'], 
        trim: true 
    },
    city: { 
        type: String, 
        required: [true, 'City is required'], 
        trim: true 
    },
    country: { 
        type: String, 
        required: [true, 'Country is required'], 
        trim: true 
    }
}, { timestamps: true });

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
