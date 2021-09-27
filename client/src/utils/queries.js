import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($username: String) {
    thoughts(username: $username) {
    _id
    username
    email
    bookCount
    savedBooks {
      # _id
      bookId
      authors
      image
      link
      title
      description
    }
    }
  }`