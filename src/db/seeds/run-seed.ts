const devData = require("../data/programs");
const seed = require("./seed.ts");
const db = require("../connection.ts");

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
