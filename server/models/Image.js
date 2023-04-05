const { Schema } = require('mongoose');
const ingredientSchema = require('./Ingredient');
const stepSchema = require('./Step');
// const imageSchema = require('./Image');
// const dateFormat = require('../utils/dateFormat');

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, 'This image needs a working url'],
      maxLength: 2048
    },
    steps: [stepSchema],
    ingredients: [ingredientSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = imageSchema;