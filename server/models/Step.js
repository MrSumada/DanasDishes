const { Schema } = require('mongoose');
const imageSchema = require('./Image');
// const dateFormat = require('../utils/dateFormat');

const stepSchema = new Schema(
  {
    step: {
      type: String,
      required: [true, 'This step needs to have text'],
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

module.exports = stepSchema;