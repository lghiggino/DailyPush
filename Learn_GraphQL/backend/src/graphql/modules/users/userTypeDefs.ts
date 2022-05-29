import { gql } from "apollo-server"


export default gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String
    active: Boolean!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String
    active: Boolean
  }

  extend type Query {
    getAllUsers: [User!]!
    getUserById(id: ID): User!
  }

  extend type Mutation {
    createUser(data: UserInput!): User!
    updateUser(id: ID, data: UserInput!): User!
    deleteUser(id: ID!): Boolean
  }

  extend type Subscription {
    userAdded: User!
  }
`;