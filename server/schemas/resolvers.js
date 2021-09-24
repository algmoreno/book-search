const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async () => {
      return User.find().sort({ created: -1 })
    },
  },
  Mutation: {
    addUser: async () => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    },
    login: async () => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Wrong email')
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Wrong password')
      }

      const token = signToken(user);
      return { token, user }
    },
    saveBook: async () => {

    },
    removeBook: async () => {
      return Book.deleteOne
    }
  }
}

module.exports = resolvers; 