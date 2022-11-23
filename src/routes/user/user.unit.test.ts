import { response } from "express";
import request from "supertest";
import app from "../../app";

describe("GET /user", () => {
  it("should return 200 status code when person is added", () => {
    request(app).get("/user");
    //   .send({
    //     first_name: "Aniket",
    //     last_name: "Tefft",
    //     email: "aniket@gmail.com",
    //     gender: "Female",
    //     date_of_birth: "2022-07-26T18:30:00.000Z",
    //     country_of_birth: "Honduras",
    //   });
    expect(response.statusCode).toBe(200);
  });
});
