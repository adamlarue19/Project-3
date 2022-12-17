import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      password
      username
    }
  }
}
`;


export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
    }
  }
}
`;
export const ADD_WORKOUT = gql`
mutation addWorkout($userId: ID!, $name: String!) {
  addWorkout(userId: $userId, name: $name) {
    _id
    name
    exercises {
      name
      reps
      sets
      weight
    }
  }
}
`

export const ADD_EXERCISE = gql`
mutation AddExercise($workoutId: ID!, $name: String!, $weight: Int!, $reps: Int!, $sets: Int!) {
  addExercise(workoutId: $workoutId, name: $name, weight: $weight, reps: $reps, sets: $sets) {
    name
    reps
    sets
    weight
  }
}
`