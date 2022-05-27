import 'reflect-metadata'

import { startServer } from './src/App'
import typeDefs from './src/graphql/modules/typeDefs'
import resolvers from './src/graphql/modules/resolvers'

console.log("typeDefs >>>", {typeDefs},"resolvers >>>", {resolvers})

startServer({typeDefs, resolvers})

//https://medium.com/@choudlet/how-to-combine-graphql-type-definitions-quickly-and-easily-with-apollo-server-c96c4d9a7ea1