


import gql from '@apollo/server';

const typeDefs = `
scalar Date

type User {
  id: Int!
  name: String!
  email: [String!]
  contact: [String!]
  state: String!
  address: String!
  contract_startdate: Date!
  contract_enddate: Date!
  contract_duration: String!
  bill_generation: String!
  createdAt: Date!
  updatedAt: Date!
}

type Query {
  getUser(id: Int!): User
  getAllUsers: [User]
}

type Mutation {
  createUser(
    name: String!,
    email: [String!],
    contact: [String!],
    state: String!,
    address: String!,
    contract_startdate: Date!,
    contract_enddate: Date!,
    contract_duration: String!,
    bill_generation: String!,
    createdAt: Date!,
    updatedAt: Date!
    ): User

  updateUser(
    id: Int!, 
    name: String!,
    email: [String!],
    contact: [String!],
    state: String!,
    address: String!,
    contract_startdate: Date!,
    contract_enddate: Date!,
    contract_duration: String!,
    bill_generation: String!,
    createdAt: Date!,
    updatedAt: Date!
    ): User

  deleteUser(id: Int!): User
}
`;

export default typeDefs;