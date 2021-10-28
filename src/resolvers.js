const resolvers = {
  Query: {
    dogs: async (_, { __ }, { dataSources }) => {
      return dataSources.dogsAPI.fetchAllDogs();
    },
    dog: async (_, { breed }, { dataSources }) => {
      return dataSources.dogsAPI.fetchDogByBreed({ breed });
    },
  },

  Dog: {
    image: ({ breed }, _, { dataSources }) => {
      return dataSources.dogsAPI.fetchImages({ breed });
    },
  },
};

module.exports = { resolvers };
