const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Book {
    id: ID!
    title: String!
    owner: User!
  }

  type Query {
    booksOwnedByOwner(ownerId: ID!): [Book!]!
    books: [Book!]!
    book(id: ID!): Book
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addBook(title: String!, ownerId: ID!): Book!
    updateBookOwner(bookId: ID!, ownerId: ID!): Book
    createOwner(name: String!): User!
  }
`;

module.exports = {
  typeDefs,
};
