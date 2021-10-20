const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');
const { DogApi } = require('./datasources');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      dogsAPI: new DogApi(),
    };
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
