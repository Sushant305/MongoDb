const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports  = mongoose.model("ToDoList",ToDoListSchema)
