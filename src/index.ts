import exrpess, { Request, Response } from "express";

export const app = exrpess();

app.get("/api/handshake", async (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Welcome" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("we are running at" + port);
});
