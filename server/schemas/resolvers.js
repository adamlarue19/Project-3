const { User, Exercise } = require('../models');
const { Workout } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate({path:'workouts',populate:{path:'exercises'}});
    },

    user: async (parent, { profileId }) => {
      return User.findOne({ _id: profileId });
    },
    workouts: async () => {
      return Workout.find().populate('exercises');
    },
    workout: async (parent, { workoutId }) => {
      return Workout.findOne({ _id: workoutId });

    },
    exercises: async () => {
      return Exercise.find();
    },
    exercise: async (parent, { exerciseId }) => {
      return Exercise.findOne({ _id: exerciseId });

    },
  },
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },

      removeUser: async (parent, { profileId }) => {
        return User.findOneAndDelete({ _id: profileId });
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }

        const token = signToken(user);

        return { token, user };
      },

      addWorkout: async (parent, { userId, name }) => {
        // create workout with the name
        const newWorkout = await Workout.create({ name: name });
        // push the workout into the current user
        console.log(newWorkout._id)
       const user = await User.findByIdAndUpdate(
          { _id: userId },
          { $addToSet: { workouts: newWorkout._id } },
          { new: true }
        );
        return newWorkout;
      },

      addExercise: async (parent, {workoutId, name, weight, reps, sets }) => {
        const newExercise = await Exercise.create({ name: name, weight: weight, reps: reps, sets: sets });
        console.log(newExercise._id)
        const user = await Workout.findByIdAndUpdate(
          { _id: workoutId },
          { $addToSet: { exercises: newExercise._id } },
          { new: true }
        );
        return newExercise;
      },
    },
  };

  module.exports = resolvers;
