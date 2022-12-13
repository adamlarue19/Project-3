const db = require('../config/connection');
const { User, Workout, Cardio, Exercise } = require('../models');
const userSeeds = require('./userSeeds.json');
const cardioSeeds = require('./cardioSeeds.json')
const workoutSeeds = require('./workoutSeeds.json')
const exerciseSeeds = require('./exerciseSeeds.json')

db.once('open', async () => {
  try {
    await User.create(userSeeds);
    await Workout.create(workoutSeeds)
    await Cardio.create(cardioSeeds)
    await Exercise.create(exerciseSeeds)

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
