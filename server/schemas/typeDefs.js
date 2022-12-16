const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]
  }

  type Workout {
    _id: ID
    name: String
    exercises: [Exercise]
  }
 
  type Exercise {
    name: String
    weight: Int
    reps: Int
    sets: Int
  }

  type Cardio {
    name: String
    distance: Int
    time: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(profileId: ID!): User
    workout(workoutId: ID!): Workout
    workouts: [Workout]
    exercise(exerciseId: ID!):Exercise
    exercises: [Exercise]
    cardios: [Cardio]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(username: String!, email: String!, password: String!): User
    addWorkout(userId: ID!, name: String!): Workout
    addExercise(workoutId: ID!, name: String!, weight: Int!, reps: Int!, sets: Int!): Exercise
  }
`;

module.exports = typeDefs;
