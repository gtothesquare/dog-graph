
const resolvers = {
  Query: {
    breeds: async (_, { id }, { dataSources }) => {
      return dataSources.dogsAPI.fetchAllBreeds();
    },
  }
}

module.exports = { resolvers };