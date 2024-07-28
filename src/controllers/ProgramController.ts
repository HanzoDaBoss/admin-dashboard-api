import {NextFunction, Request, Response} from "express";
import {insertProgram, selectPrograms} from "../models/ProgramModel";

export const getPrograms = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  selectPrograms()
    .then((programs) => {
      res.status(200).send({programs});
    })
    .catch(next);
};

export const postProgram = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {body} = req;
  insertProgram(body)
    .then((program) => {
      res.status(201).send({program});
    })
    .catch(next);
};
