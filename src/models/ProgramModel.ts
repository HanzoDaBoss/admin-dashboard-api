import db from "../db/connection";

export const selectPrograms = () => {
  return db.query(`SELECT * FROM programs;`).then(({rows}) => {
    return rows;
  });
};
