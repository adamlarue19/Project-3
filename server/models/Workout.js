const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise'
        }
    ]
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
