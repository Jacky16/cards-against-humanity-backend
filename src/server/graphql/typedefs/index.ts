const typeDefs = `#graphql
type Card {
    id: ID!
    text: String!
  }

  type BlackCard {
    text: String!
    pick: Int!
  }
 
  type CardSet {
    name: String!
    codeName: String!
    official: Boolean!
    blackCards: [BlackCard!]
    whiteCards: [String!]
  }

  type Query {
    cardSets: [CardSet]
  }
`;

export default typeDefs;
