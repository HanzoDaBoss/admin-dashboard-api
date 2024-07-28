const {Programs} = require("../data/programs.ts");
const seed = require("./seed.ts");
const db = require("../connection.ts");

const runSeed = () => {
  return seed(Programs).then(() => db.end());
};

runSeed();
