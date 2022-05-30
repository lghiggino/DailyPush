import { ApolloServer, PubSub } from "apollo-server"
import mongoose from "mongoose";

export async function startServer({ typeDefs, resolvers }: any) {
  const connection = await mongoose.connect("mongodb://localhost:27017/graphql")

  const pubsub = new PubSub()

  const server = new ApolloServer(
    {
      typeDefs,
      resolvers,
      context: { pubsub }
    }
  )
  
  const { url } = await server.listen()
  console.log(`Server started at ${url}`)
}

