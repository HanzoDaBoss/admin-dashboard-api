import db from "../db/connection";
import {Program} from "../interfaces/Program";

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
      return rows[0];
    });
};

export const deleteProgramById = (id: number) => {
  return db
    .query(
      `
  DELETE FROM programs WHERE id = $1
  RETURNING *;
  `,
      [id]
    )
    .then(({rows}) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Program not found",
        });
      }
    });
};

export const updateProgramById = (id: number, body: Program) => {
  const insertVals = [
    body.title,
    body.topic,
    body.learningFormats,
    body.bestseller,
    body.startDate,
    id,
  ];
  return db
    .query(
      `
    UPDATE programs SET title = $1, topic = $2, learningFormats = $3, bestseller = $4, startDate = $5
    WHERE id = $6
    RETURNING *;
    `,
      insertVals
    )
    .then(({rows}) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Program not found",
        });
      }
      return rows[0];
    });
};
