const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Workout {
    name: string
    exercise: [Exercise]
  }

  type Exercise {
    name: String
    weight: Number
    reps: Number
    sets: Number
  }

  type Cardio {
    name: String
    distance: Number
    time: Number
  }

  type Query {
    users: [User]
    workouts: [Workout]
    exercises: [Exercise]
    cardios: [Cardio]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
