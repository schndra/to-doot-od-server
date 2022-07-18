import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide todo"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Todo", todoSchema);
