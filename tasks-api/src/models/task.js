const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description : {
      type: String,
      required: [true, "Please add description"],
    },
    start: {
      type: String,
      required: [true, "Please add the start date of the task"],
    },
    end: {
      type: String,
      required: [true, "Please add the end date of the task"],
    },
  },
  {
    timestamps: true,
  }
);


const Tasks = mongoose.model('Task',taskSchema)

module.exports = Tasks