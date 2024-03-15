import mongoose from "mongoose";

const NodeTreeSchema = new mongoose.Schema({
  username: { type: String, required: true },
  node: { type: String, required: true },
  path: { type: String },
});

const NodeModel = mongoose.model("nodeTree", NodeTreeSchema);

export default NodeModel;
