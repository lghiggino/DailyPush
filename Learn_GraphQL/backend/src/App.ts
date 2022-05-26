import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const resolvers = {}

export class App {
    static server: ApolloServer;
    static init() {
        this.createServer()
    }
    static createServer() {
        this.server = new ApolloServer({
            typeDefs, resolvers
        })

        return this.server
    }
}
