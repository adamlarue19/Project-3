const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Workout {
    name: String
    exercise: [Exercise]
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
    workouts: [Workout]
    exercises: [Exercise]
    cardios: [Cardio]
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser(username: String!, email: String!, password: String!): User

  }
`;

module.exports = typeDefs;
