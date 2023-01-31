// import the gql tagged template function
const { gql } = require('apollo-server-express')

// create typeDefs
const typeDefs = gql`
  type Recipe {
    _id: ID
    name: String
    difficulty: String
    time: String
    background: String
    ingredients: [Ingredient]
    createdAt: String
    username: String
    steps: [Step]
    images: [Image]
    favoriteCount: Int
  }
  type User {
    _id: ID
    username: String
    email: String
    recipes: [Recipe]
    followers: [User]
    following: [User]
    favoriteRecipes: [Recipe]
  }
  type Ingredient {
    _id: ID
    ingredient: String
    quantity: String
  }
  type Step {
    _id: ID
    step: String
    image: [Image]
  }
  type Image {
    _id: ID
    imageUrl: String
    alt: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(email: String!): User
    recipes(email: String): [Recipe]
    recipe(_id: ID!): Recipe
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(name: String!): Goal
    addStep(goalId: ID!, stepBody: String!): Goal
    completeIngredient(ingredientId: ID!): Goal
    completeStep(goalId: ID!, stepId: ID!): Goal
    deleteRecipe(goalId: ID!): Goal
    deleteStep(goalId: ID!, stepId: ID!): Goal
  }
`;

// export the typeDefs
module.exports = typeDefs
