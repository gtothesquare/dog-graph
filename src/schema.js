const { gql } = require('apollo-server');

const typeDefs = gql`
    type DogImage {
        urls: [String]
    }
    type Dog {
        breed: ID,
        image: DogImage,
        subBreeds: [String]
    }
    
    type Query {
        dogs: [Dog]
        dog(breed:String): Dog
    }

`;

module.exports = { typeDefs };