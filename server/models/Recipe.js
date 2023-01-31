const { Schema, model } = require('mongoose');
const stepSchema = require('./Step');
const encouragementSchema = require('./Encouragement')
const dateFormat = require('../utils/dateFormat');

const goalSchema = new Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    steps: [stepSchema],
    images: [imageSchema],
    favoriteCount: {
        type: Int32Array,
        required: false 
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

goalSchema.virtual('stepCount').get(function() {
  return this.steps.length;
});

goalSchema.virtual('encouragementCount').get(function () {
  return this.encouragements.length;
});

const Goal = model('Goal', goalSchema);

module.exports = Goal;