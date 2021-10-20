const { gql } = require('apollo-server');

const typeDefs = gql`
    type Breed {
        name: String,
        randomImageUrl: String,
        subBreeds: [String]
    }
    
    type Query {
        breeds: [Breed]
    }

`;

module.exports = { typeDefs };