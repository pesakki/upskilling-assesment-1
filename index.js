const { ApolloServer, gql } = require("apollo-server");
const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const port = 8000
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// server.listen().then(({ port }) => {
//   console.log(`Server ready at ${port}`);
// });
server.listen({port},()=>{
    console.log(`Server ready at ${port}`);
})

// name: "product5",
// description: "This is a description of product5",
// price: 5,
// image_url: "https://product1.jpg5",
// category: "section5",


// username: "username12345",
// email: "email12@fdvfvd.com345",
// password: "password3245",
// first_name: "first_name1223475",
// last_name: "last_name12345",
// address: "1 Main St2345",
// phone_number: "123-456-7890345",
// street_address: "1 street_address2345",
// city: "city12345",
// state: "CA12345",
// postal_code: "123452345",
// country: "USA12345",
