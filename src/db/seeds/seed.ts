import format from "pg-format";
import {Program} from "../data/programs";

const db = require("../connection");

const seed = (programData: Program[]) => {
  return db
    .query("DROP TABLE IF EXISTS programs")
    .then(() => {
      return db.query(`
        CREATE TABLE programs (
          id SERIAL PRIMARY KEY,
          title VARCHAR NOT NULL,
          topic VARCHAR NOT NULL,
          learningFormats VARCHAR NOT NULL,
          bestseller BOOLEAN NOT NULL,
          startDate TIMESTAMP NOT NULL
        );`);
    })
    .then(() => {
      const insertProgramsQueryStr = format(
        "INSERT INTO programs (title, topic, learningFormats, bestseller, startDate) VALUES %L;",
        programData.map(
          ({title, topic, learningFormats, bestseller, startDate}) => [
            title,
            topic,
            learningFormats,
            bestseller,
            startDate,
          ]
        )
      );
      return db.query(insertProgramsQueryStr);
    });
};

export {seed};
