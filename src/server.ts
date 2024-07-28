import express, {NextFunction, Request, Response} from "express";
import {apiRouter} from "./routes/apiRouter";
import {
  handleCustomErrors,
  handlePsqlErrors,
  handleServerErrors,
} from "./errors/error";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({message: "Not found"});
});

app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleServerErrors);

export default app;
