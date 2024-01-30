import express, { Request, Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

app.listen(8080, () => {
  console.log("Server running on Port 8080");
});
