import { gql } from "apollo-server"

export default gql`
  type Book {
      _id: ID
      title: String!
      author: User!
  }

  # BookInput is the data that is sent during the mutation
  input BookInput {
      title: String!
      author: ID!
  }

  extend type Query {
      getAllBooks: [Book]!
      getBookById(id: ID!): Book!
  }

  # data is an object with the BookInput format
  extend type Mutation {
      createBook(data: BookInput): Book!
      updateBook(id: ID!, data: BookInput): Book!
      deleteBook(id: ID!): Boolean
  }
`;
