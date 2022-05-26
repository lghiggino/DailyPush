import 'reflect-metadata'
import path from 'path'
import crypto from 'crypto'
import { ApolloServer, gql } from 'apollo-server'
import { UserResolver } from './src/resolvers/UserResolver'

// TYPES
import { Book } from './src/models/Book'

const booksDatabase = [
    { title: 'Lord of the rings', author: 'JRR Tolkien' },
    { title: 'How to cope with boredom', author: 'João Flor Ghiggino' }
]

const usersDatabase = [
    { _id: crypto.randomUUID(), name: 'Matheus', email: 'm1@t.com', active: true },
    { _id: crypto.randomUUID(), name: 'Matheus 2', email: 'm2@t.com', active: false },
    { _id: crypto.randomUUID(), name: 'Matheus 3', email: 'm3@t.com', active: true },
]

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type User {
      _id: ID!
      name: String!
      email: String!
      active: Boolean!
  }

  type Post {
      _id: ID
      title: String!
      content: String!
      author: User
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    hello: String
    getUsers: [User]!
    getUserByEmail(email: String): User!
  }
`;

const resolvers = {
    Query: {
        hello: () => "Hello World",
        books: () => booksDatabase,
        getUsers: () => usersDatabase,
        getUserByEmail: (_: any, args: { email: string }) => {
            console.log("entrou aqui")
            return usersDatabase.find(user => user.email === args.email)
        }
    }
}

async function main() {
    const server = new ApolloServer({ typeDefs, resolvers })
    const { url } = await server.listen()
    console.log(`server running at url: ${url}`)
}

main()