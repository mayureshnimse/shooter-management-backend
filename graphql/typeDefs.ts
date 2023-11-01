//typeDefs.ts

import gql from '@apollo/server';

const typeDefs = `
scalar Date

enum TenantType {
  STATE
  CLUB
  ALL
}

type Tenant {
  id: Int!
  tenant_type: TenantType!
  state: String!
  tenant_name: String!
  primary_email: String!
  alternate_email: String
  contact_person: String!
  primary_contact: String!
  alternate_contact: String
  address1: String!
  address2: String
  address3: String
  city: String!
  pincode: String!
  contract_status: Boolean!
  contract_startdate: Date!
  contract_enddate: Date!
  contract_details: String!
  documents: String!
}

type Query {
  getTenant(id: Int!): Tenant
  getAllTenants: [Tenant]
  getTenantByType(tenant_type: TenantType!): [Tenant]
}

type Mutation {
  createTenant(
    tenant_type: TenantType!
    state: String!
  tenant_name: String!
  primary_email: String!
  alternate_email: String
  contact_person: String!
  primary_contact: String!
  alternate_contact: String
  address1: String!
  address2: String
  address3: String
  city: String!
  pincode: String!
  contract_status: Boolean!
  contract_startdate: Date!
  contract_enddate: Date!
  contract_details: String!
  documents: String!
    ): Tenant

  updateTenant(
    id: Int!
    tenant_type: TenantType!
  state: String!
  tenant_name: String!
  primary_email: String!
  alternate_email: String
  contact_person: String!
  primary_contact: String!
  alternate_contact: String
  address1: String!
  address2: String
  address3: String
  city: String!
  pincode: String!
  contract_status: Boolean!
  contract_startdate: Date!
  contract_enddate: Date!
  contract_details: String!
  documents: String!
    ): Tenant

  deleteTenant(id: Int!): Tenant
}
`;

export default typeDefs;