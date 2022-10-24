const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "Users",
  },
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("todo", TodoSchema);
