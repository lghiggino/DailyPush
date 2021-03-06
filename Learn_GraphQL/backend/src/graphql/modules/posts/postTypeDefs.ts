import { gql } from "apollo-server"

export default gql`type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  input PostInput {
    title: String!
    content: String!
    author: ID!
  }

  extend type Query {
    getAllPosts: [Post!]!
    getPostById(id: ID): Post!
  }

  extend type Mutation {
    createPost(data: PostInput!): Post!
    updatePost(id: ID, data: PostInput!): Post!
    deletePost(id: ID!): Boolean
  }
`;

