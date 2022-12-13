const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    exercise: {
        type: String,
        trim: true,
    }
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
