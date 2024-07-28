import format from "pg-format";
import db from "../connection";
import {Program} from "../../Interfaces/IProgram";

const seed = (programData: Program[]) => {
  return db
    .query("DROP TABLE IF EXISTS programs")
    .then(() => {
      return db.query(`
        CREATE TABLE programs (
          id SERIAL PRIMARY KEY,
          title VARCHAR NOT NULL,
          topic VARCHAR NOT NULL,
          learningFormats VARCHAR[] NOT NULL,
          bestseller BOOLEAN NOT NULL,
          startDate VARCHAR NOT NULL
        );`);
    })
    .then(() => {
      const insertProgramsQueryStr = format(
        "INSERT INTO programs (title, topic, learningFormats, bestseller, startDate) VALUES %L;",
        programData.map(
          ({title, topic, learningFormats, bestseller, startDate}) => [
            title,
            topic,
            JSON.stringify(learningFormats).replace("[", "{").replace("]", "}"),
            bestseller,
            startDate,
          ]
        )
      );
      return db.query(insertProgramsQueryStr);
    });
};

export default seed;
