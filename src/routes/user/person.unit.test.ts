import request from "supertest";
import app from "../../app";

describe.skip("GET /user", () => {
  beforeAll(() => {});

  afterAll(() => {
    // jest.restoreAllMocks();
  });

  it.only("should return 200 status code when person is added", async () => {
    const resposne = await request(app).get("/user");
    expect(resposne.statusCode).toBe(200);
  });
});
