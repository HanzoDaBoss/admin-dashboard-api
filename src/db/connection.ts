import {Pool} from "pg";
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../../.env.${ENV}`,
});

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  console.log(process.env);
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

interface Iconfig {
  connectionString: string | undefined;
  max: number;
}

const config: Iconfig = {
  connectionString: undefined,
  max: 2,
};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}
const db = new Pool(config);
export default db;
