const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookID: 
    authors: []
    description: String
    title: String
    image:
    link:
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: Array!, description: String!, title: String!, bookId: ID!, image: ): User
    removeBook(bookId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }`