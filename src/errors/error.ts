import {NextFunction, Request, Response} from "express";

export const handleCustomErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status && err.msg) {
    res.status(err.status).send({message: err.msg});
  } else next(err);
};

export const handlePsqlErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.code === "22P02") {
    res.status(400).send({message: "Invalid input"});
  } else if (err.code === "42601") {
    res.status(400).send({message: "PSQL syntax error"});
  } else if (err.code === "23502") {
    res.status(400).send({message: "Column cannot be null"});
  } else if (err.code === "23503") {
    res.status(404).send({message: "Program ID not found"});
  } else next(err);
};

export const handleServerErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({message: "Internal Server Error"});
};
