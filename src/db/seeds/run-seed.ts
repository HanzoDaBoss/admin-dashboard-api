const {Programs} = require("../data/programs.ts");
const seed = require("./seed.ts");
import db from "../connection";

const runSeed = () => {
  return seed(Programs).then(() => db.end());
};

runSeed();
