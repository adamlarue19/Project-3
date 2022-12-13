const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    weight: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    sets: {
        type: Number,
        trim: true,
    },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
