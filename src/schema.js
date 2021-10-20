const { gql } = require('apollo-server');

const typeDefs = gql`
    type Dog {
        breed: ID,
        images: [String],
        subBreeds: [String]
    }
    
    type Query {
        dogs: [Dog]
        dog(breed:String): Dog
    }

`;

module.exports = { typeDefs };