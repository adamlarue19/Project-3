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
query Query($exerciseId: ID!) {
  exercise(exerciseId: $exerciseId) {
    name
    reps
    sets
    weight
  }
}
`
export const QUERY_WORKOUTS = gql`
query getuserData {
  users {
    _id
    email
    password
    username
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
}
`