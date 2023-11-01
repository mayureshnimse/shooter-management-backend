

//import { ApolloServer } from 'apollo-server';

import { ApolloServer } from '@apollo/server';
import resolvers from './graphql/resolvers';
import { readFileSync } from 'fs';
import path from 'path';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './graphql/typeDefs';
//const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });


startStandaloneServer(server, {
  context: async () => {
     const { cache } = server;
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
   
    };
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});;
