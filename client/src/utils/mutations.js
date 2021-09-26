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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }`

export const SAVE_USER = gql`
  mutation saveBook($book: bookId!){
    saveBook(book: $book) {
      book: {
        bookId
      }
    }
  }`

export const REMOVE_BOOK = gql`
  mutation removeBook($book: bookId!){
    removeBook(book: $book) {
      book: {
        bookId
      }
    }
  }`
