import db from "../db/connection";
import {Program} from "../Interfaces/IProgram";

export const selectPrograms = () => {
  return db.query(`SELECT * FROM programs;`).then(({rows}) => {
    return rows;
  });
};

export const insertProgram = (body: Program) => {
  return db.query(`SELECT * FROM programs;`).then(({rows}) => {
    return rows;
  });
};
