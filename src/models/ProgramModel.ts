import db from "../db/connection";
import {Program} from "../Interfaces/IProgram";

export const selectPrograms = () => {
  return db.query(`SELECT * FROM programs;`).then(({rows}) => {
    return rows;
  });
};

export const insertProgram = (body: Program) => {
  const insertVals = [
    body.title,
    body.topic,
    body.learningFormats,
    body.bestseller,
    body.startDate,
  ];
  return db
    .query(
      `
    INSERT INTO programs (title, topic, learningFormats, bestseller, startDate)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    ;`,
      insertVals
    )
    .then(({rows}) => {
      return rows;
    });
};
