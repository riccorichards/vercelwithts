import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String },
  text: { type: String },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
