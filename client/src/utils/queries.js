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
export const userData = gql`
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