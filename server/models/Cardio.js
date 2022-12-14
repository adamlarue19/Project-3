const { Schema, model } = require('mongoose');

const cardioSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    distance: {
        type: Number,
        required: true,
        trim: true,
    },
    time: {
        type: Number,
        required: true,
        trim: true,
    }
});

const Cardio = model('Cardio', cardioSchema);

module.exports = Cardio;
