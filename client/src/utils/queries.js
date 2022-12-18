import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
export const QUERY_EXERCISE =gql`
query getExercise($exerciseId: ID!) {
  exercise(exerciseId: $exerciseId) {
    name
    reps
    sets
    weight
  }
}
`
export const QUERY_WORKOUTS = gql`
query Query {
  workouts {
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
export const QUERY_WORKOUT = gql`
query getWorkout($workoutId: ID!) {
  workout(workoutId: $workoutId) {
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