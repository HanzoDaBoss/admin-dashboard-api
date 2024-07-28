import {NextFunction, Request, Response} from "express";
import {selectPrograms} from "../models/ProgramModel";

export const getPrograms = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  selectPrograms()
    .then((programs) => {
      res.status(200).send({programs});
    })
    .catch();
};
