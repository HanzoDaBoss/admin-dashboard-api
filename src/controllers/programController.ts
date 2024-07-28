import {NextFunction, Request, Response} from "express";
import {
  deleteProgramById,
  insertProgram,
  selectPrograms,
  updateProgramById,
} from "../models/programModel";

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

export const removeProgramById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {id} = req.params;
  deleteProgramById(+id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};

export const putProgramById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {id} = req.params;
  const {body} = req;
  updateProgramById(+id, body)
    .then((program) => {
      res.status(200).send({program});
    })
    .catch(next);
};
