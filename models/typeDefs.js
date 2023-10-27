const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
  }
`;

module.exports = { typeDefs };