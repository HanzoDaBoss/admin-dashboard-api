import {
  getPrograms,
  postProgram,
  putProgramById,
  removeProgramById,
} from "../controllers/programController";

const programRouter = require("express").Router();

programRouter.route("/").get(getPrograms).post(postProgram);

programRouter.route("/:id").delete(removeProgramById).put(putProgramById);

export {programRouter};
