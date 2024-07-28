import {
  getPrograms,
  postProgram,
  removeProgramById,
} from "../controllers/ProgramController";

const programRouter = require("express").Router();

programRouter.route("/").get(getPrograms).post(postProgram);

programRouter.route("/:id").delete(removeProgramById);

export {programRouter};
