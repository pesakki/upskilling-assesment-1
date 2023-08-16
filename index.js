const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();
const typeDefs = gql`
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
  type User {
    id: Int!
    title: String!
    taskName: String!
    description: String!
    completed: Boolean!
    token: String
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

  context: (req) => ({
    prisma,
    req,
  }),
});
// const decoded = jwt.verify(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJpYXQiOjE2OTIwMTk1ODYsImV4cCI6MTY5MjAxOTY0Nn0.gbBEH0_4iZJfeAe4mJklnxchbIVpXf4hKJIClo1jWz8",
//   "Doremon"
// );
//console.log("decode", decoded.userId);

const port = 9000;
server.listen({ port }, () => {
  console.log(`Server ready at ${port}`);
});
