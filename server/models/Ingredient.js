const { Schema } = require('mongoose');
const imageSchema = require('./Image');
// const dateFormat = require('../utils/dateFormat');

const ingredientSchema = new Schema(
  {
    quantity: {
        type: String,
        required: [true, 'This ingredient needs a quantity'],
        maxLength: 1024
      },
      name: {
        type: String,
        required: [true, "What's this ingredient named?"],
        maxLength: 1024
      },
    completed: {
      type: Boolean,
      default: false
    },
    images: [imageSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = ingredientSchema;