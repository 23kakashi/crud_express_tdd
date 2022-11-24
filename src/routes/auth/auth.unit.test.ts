import request from "supertest";
import app from "../../app";

describe("POST /auth/register", () => {
  beforeEach(() => {});

  afterEach(async () => {});

  it("should have username in body", async () => {
    //Arrange
    const resposne = await request(app).post("/auth/register").send({
      username: "",
      password: "tapish@123",
    });
    //Act
    //Assert
    expect(resposne.statusCode).toBe(401);
  });

  it("should have password in body", async () => {
    //Arrange
    const resposne = await request(app).post("/auth/register").send({
      username: "tapish",
      password: "",
    });
    //Act
    //Assert
    expect(resposne.statusCode).toBe(401);
  });

  describe("password validation", () => {
    it("should have min 8 length", async () => {
      //Arrange
      const response: request.Response = await request(app)
        .post("/auth/register")
        .send({
          username: "tapish",
          password: "tapish",
        });

      //Act
      const { message } = JSON.parse(response.text);
      //Assert
      expect(message).toBe("Password should have minimum 8 characters");
      expect(response.statusCode).toBe(401);
    });
  });

  it("should return 201 status code when person is added", async () => {
    const resposne = await request(app).post("/auth/register").send({
      username: "tapish",
      password: "tapish@123",
    });
    expect(resposne.statusCode).toBe(201);
  });
});
