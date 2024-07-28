import {getPrograms, postProgram} from "../controllers/ProgramController";

const programRouter = require("express").Router();

programRouter.route("/").get(getPrograms).post(postProgram);

export {programRouter};
