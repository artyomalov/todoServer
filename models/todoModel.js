const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    user_id: {
      type: Number,
    },
    text: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Todo', TodoSchema);
