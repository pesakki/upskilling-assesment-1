const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar DateTime

  type Query {
    products: [Product]
    getProductById(id: Int!): Product
  }

  type Product {
    id: Int!
    name: String
    description: String
    price: Float
    image_url: String
    category: String
    user_id: Int
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    address: String
    phone_number: String
    order_date: DateTime
    status: String
    total_amount: Float
    quantity: Int
    subtotal: Float
    street_address: String
    city: String
    state: String
    postal_code: String
    country: String
    rating: Int
    comment: String
    created_at: DateTime
    updated_at: DateTime
  }

  type Mutation {
    createProduct(createProductInput: CreateProductInput): Product
    updateProduct(id: Int!, updateProductInput: UpdateProductInput): Product
    deleteProduct(id: Int!): Product
  }

  input CreateProductInput {
    name: String
    description: String
    price: Float
    image_url: String
    category: String
    user_id: Int
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    address: String
    phone_number: String
    order_date: DateTime
    status: String
    total_amount: Float
    quantity: Int
    subtotal: Float
    street_address: String
    city: String
    state: String
    postal_code: String
    country: String
    rating: Int
    comment: String
  }
  input UpdateProductInput {
    name: String
    description: String
    price: Float
    image_url: String
    category: String
    user_id: Int
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    address: String
    phone_number: String
    order_date: DateTime
    status: String
    total_amount: Float
    quantity: Int
    subtotal: Float
    street_address: String
    city: String
    state: String
    postal_code: String
    country: String
    rating: Int
    comment: String
  }
`;

module.exports = { typeDefs };
