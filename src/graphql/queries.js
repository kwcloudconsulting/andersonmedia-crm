/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWho = /* GraphQL */ `
  query GetWho($id: ID!) {
    getWho(id: $id) {
      id
      name
      phone
      email
      website
      createdAt
      updatedAt
    }
  }
`;
export const listWhos = /* GraphQL */ `
  query ListWhos(
    $filter: ModelWhoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        website
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWhere = /* GraphQL */ `
  query GetWhere($id: ID!) {
    getWhere(id: $id) {
      id
      name
      address
      city
      state
      zip
      phone
      email
      website
      createdAt
      updatedAt
    }
  }
`;
export const listWheres = /* GraphQL */ `
  query ListWheres(
    $filter: ModelWhereFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWheres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        city
        state
        zip
        phone
        email
        website
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWhat = /* GraphQL */ `
  query GetWhat($id: ID!) {
    getWhat(id: $id) {
      id
      small_business
      large_business
      government_agency
      non_profit
      lender
      contractor
      createdAt
      updatedAt
    }
  }
`;
export const listWhats = /* GraphQL */ `
  query ListWhats(
    $filter: ModelWhatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        small_business
        large_business
        government_agency
        non_profit
        lender
        contractor
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
