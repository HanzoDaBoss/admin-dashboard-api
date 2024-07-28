import app from "../src/server";
import supertest from "supertest";
import db from "../src/db/connection";
import seed from "../src/db/seeds/seed";
import {Programs} from "../src/db/data/programs";

import {
  expect,
  jest,
  test,
  describe,
  beforeEach,
  afterAll,
} from "@jest/globals";
import {Program} from "../src/interfaces/Program";

afterAll(() => {
  return db.end();
});

beforeEach(() => {
  return seed(Programs);
});

describe("/api/programs", () => {
  test("GET 200: Should return an array of program objects", async () => {
    const res = await supertest(app).get("/api/programs");
    expect(res.statusCode).toEqual(200);

    const {programs} = res.body;
    expect(programs).toHaveLength(11);
    programs.forEach((program: Program) => {
      expect(program).toHaveProperty("id");
      expect(program).toHaveProperty("title");
      expect(program).toHaveProperty("topic");
      expect(program).toHaveProperty("learningformats");
      expect(program).toHaveProperty("bestseller");
      expect(program).toHaveProperty("startdate");
    });
  });

  test("POST 201: responds with the posted program", async () => {
    const res = await supertest(app)
      .post("/api/programs")
      .send({
        title: "Integrating AI into current infrastructure",
        topic: "innovation-and-digital-transformation",
        learningFormats: ["virtual"],
        bestseller: true,
        startDate: "2024-07-08T00:00:00+0000",
      });
    expect(res.statusCode).toEqual(201);

    const {program} = res.body;
    expect(program).toHaveProperty(
      "title",
      "Integrating AI into current infrastructure"
    );
    expect(program).toHaveProperty(
      "topic",
      "innovation-and-digital-transformation"
    );
    expect(program).toHaveProperty("learningformats", ["virtual"]);
    expect(program).toHaveProperty("bestseller", true);
    expect(program).toHaveProperty("startdate", "2024-07-08T00:00:00+0000");
  });
});
