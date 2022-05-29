import 'dotenv/config'

import { gql } from 'apollo-server'
import _ from "lodash";
import 'reflect-metadata'

import { startServer } from './src/App'
import bookTypeDefs from './src/graphql/modules/books/bookTypeDefs'
import postTypeDefs from './src/graphql/modules/posts/postTypeDefs'
import userTypeDefs from './src/graphql/modules/users/userTypeDefs'
// 
import bookResolver from './src/graphql/modules/books/bookResolver'
import postResolver from './src/graphql/modules/posts/postResolver'
import userResolver from './src/graphql/modules/users/userResolver'


const baseTypeDefs = gql`
  type Query
  type Mutation
  type Subscription
`


startServer({
    typeDefs: [baseTypeDefs, userTypeDefs, postTypeDefs, bookTypeDefs],
    resolvers: _.merge({}, bookResolver, postResolver, userResolver)
})

//stackoverflow.com/q/60747549/13693557