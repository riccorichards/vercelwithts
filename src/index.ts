import exrpess, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Post from "./postschema";
import NodeModel from "./NodeTree.model";

export const app = exrpess();

app.get("/api/handshake", async (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Welcome" });
});

const url = process.env.MongoDB_Prod || "";
app.use(exrpess.json());
mongoose
  .connect(url)
  .then(() => console.log("MongoDB was successfully connected"))
  .catch((err) => console.log(err));

app.get("/api/nodes", async (req: Request, res: Response) => {
  try {
    const nodes = await NodeModel.find(); // add await here
    return res.status(200).json(nodes);
  } catch (error) {
    console.error(error); // It's a good practice to log errors for debugging.
    return res.status(500).json({ message: "An error occurred", error: error }); // send only the error message
  }
});

app.get("/api/post", async (req: Request, res: Response) => {
  try {
    const newPost = await Post.find(); // add await here
    return res.status(200).json(newPost);
  } catch (error) {
    console.error(error); // It's a good practice to log errors for debugging.
    return res.status(500).json({ message: "An error occurred", error: error }); // send only the error message
  }
});

app.post("/api/post", async (req: Request, res: Response) => {
  try {
    const { title, text } = req.body;
    const newPost = await Post.create({ title, text }); // add await here
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error); // It's a good practice to log errors for debugging.
    return res.status(500).json({ message: "An error occurred", error: error }); // send only the error message
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("we are running at " + port);
});
