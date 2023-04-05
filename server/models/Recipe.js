const { Schema, model } = require('mongoose');
const stepSchema = require('./Step');
const ingredientSchema = require('./Ingredient')
const imageSchema = require('./Image');
// const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'You need to include a name for this recipe'],
      minlength: 1,
      maxlength: 280
    },
    difficulty: {
        type: String
    },
    time: {
        type: String
    },
    background: {
        type: String
    },
    ingredients: [ingredientSchema],
    steps: [stepSchema],
    images: [imageSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      // get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

ingredientSchema.virtual('ingredientCount').get(function() {
  return this.ingredients.length;
});


const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;