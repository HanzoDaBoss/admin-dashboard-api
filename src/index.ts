import express, {Request, Response} from "express";
import {apiRouter} from "./routes/apiRouter";

const app = express();

app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

module.exports = app;
