const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./resolvers");
const typeDefs = gql`
  type User {
    id: Int!
    title: String!
    taskName: String!
    description: String!
    completed: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }
  type Mutation {
    createUser(createUserInput: CreateUserInput!): User
    updateUser(id: Int!, updateUserInput: UpdateUserInput!): User
    deleteUser(id: Int!): User
  }
  input CreateUserInput {
    taskName: String!
    title: String!
    description: String
    completed: Boolean
  }
  input UpdateUserInput {
    taskName: String
    title: String
    description: String
    completed: Boolean
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = 9000;
server.listen({ port }, () => {
  console.log(`Server ready at ${port}`);
});
