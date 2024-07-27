import { programRouter } from "./programsRouter";
const apiRouter = require("express").Router();

apiRouter.use("/programs", programRouter)

export {apiRouter};