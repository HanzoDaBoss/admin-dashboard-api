import {Programs} from "../data/programs";
import seed from "./seed";
import db from "../connection";

const runSeed = () => {
  return seed(Programs).then(() => db.end());
};

runSeed();
