import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user{
        _id
        username
      }
    }
  }`

export const ADD_USER = gql`
  mutation addUser($username: $username, email: $email, $password: $password) {
    token
    user {
      _id
      username
    }
  }
`

export const SAVE_USER = gql`
  mutation saveBook($book: $book) {
    book {
      bookID
    }
  }`

export const REMOVE_BOOK = gql`
  mutation removeBook($book: $book) {
    book {
      bookID
    }
  }`
