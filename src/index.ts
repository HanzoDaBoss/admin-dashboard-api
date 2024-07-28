import express, {NextFunction, Request, Response} from "express";
import {apiRouter} from "./routes/apiRouter";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({msg: "Not found"});
});

export default app;
