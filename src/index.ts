import express, {NextFunction, Request, Response} from "express";
import {apiRouter} from "./routes/apiRouter";

const app = express();

app.use("/api", apiRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, TypeScript Express!");
// });

app.get("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({msg: "Not found"});
});

module.exports = app;
