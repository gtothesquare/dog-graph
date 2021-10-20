
const resolvers = {
  Query: {
    dogs: async (_, { __ }, { dataSources }) => {
      return dataSources.dogsAPI.fetchAllDogs();
    },
    dog: async (_, { breed } , { dataSources }) => {
      return dataSources.dogsAPI.fetchDogByBreed({ breed });
    }
  }
}

module.exports = { resolvers };