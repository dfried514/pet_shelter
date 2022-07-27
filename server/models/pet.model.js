const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required.'], 
        minLength: [3, 'Name must be at least 3 characters long.'],
        unique: [true, 'Name is already in use.']
    }, 
    type: { 
        type: String, 
        required: [true, 'Type is required.'], 
        minLength: [3, 'Type must be at least 3 characters long.']
    }, 
    description: { 
        type: String, 
        required: [true, 'Description is required.'],  
        minLength: [3, 'Description must be at least 3 characters long.']
    }, 
    skill1: { 
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Pet', PetSchema);
