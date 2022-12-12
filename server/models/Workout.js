const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
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

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
