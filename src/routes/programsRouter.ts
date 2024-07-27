import { getPrograms } from "../controllers/ProgramController";

const programRouter = require("express").Router();

programRouter.route("/").get(getPrograms);

export {programRouter};