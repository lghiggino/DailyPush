import { ApolloServer, gql } from "apollo-server"
import mongoose from "mongoose";


export async function startServer({typeDefs, resolvers}: any){
  const connection = await mongoose.connect("mongodb://localhost:27017/graphql")

  console.log(connection)
  
  const server = new ApolloServer({typeDefs, resolvers})
  const { url } = await server.listen()
  console.log(`Server started at ${url}`)
}

