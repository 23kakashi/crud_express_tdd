import Sinon from "sinon";
import request from "supertest";
import app from "../../app";

describe.skip("Registration API (POST /auth/register)", () => {
  beforeEach(() => {});

  afterEach(async () => {});

  describe("username", () => {
    it("should respond 201 if username is minnimum 4 character long", async () => {
      //Arrange
      const expectedStatus = 201;
      const expectedResponse = {
        error: false,
        message: "User created successfully",
      };
      //Act
      const response: request.Response = await request(app)
        .post("/auth/register")
        .send({
          username: "tapish",
          password: "Tapish@123",
        });
      //Assert
      expect(response.body).toEqual(expectedResponse);
      expect(response.statusCode).toBe(expectedStatus);
    });

    it("should throw 401 if username does not have minimum 4 characters", async () => {
      //Arrange
      const expectedStatus = 401;
      const expectedResponse = {
        error: true,
        message: "Username should have minimum 4 characters",
      };
      //Act
      const resposne = await request(app).post("/auth/register").send({
        username: "ta",
        password: "tapish@123",
      });
      //Assert
      expect(resposne.body).toEqual(expectedResponse);
      expect(resposne.statusCode).toBe(expectedStatus);
    });
  });

  describe("password", () => {
    it("should respond 201 if password have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character", async () => {
      //Arrange
      const expectedStatus = 201;
      const expectedResponse = {
        error: false,
        message: "User created successfully",
      };
      //Act
      const response: request.Response = await request(app)
        .post("/auth/register")
        .send({
          username: "tapish",
          password: "Tapish@123",
        });
      //Assert
      expect(response.body).toEqual(expectedResponse);
      expect(response.statusCode).toBe(expectedStatus);
    });

    it("should have password in body", async () => {
      //Arrange
      const expectedStatus = 401;
      //Act
      const resposne = await request(app).post("/auth/register").send({
        username: "tapish",
        password: "",
      });
      //Assert
      expect(resposne.statusCode).toBe(expectedStatus);
    });

    it("should throw 401 if password does not have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character", async () => {
      //Arrange
      const expectedStatus = 401;
      const expectedResponse = {
        error: true,
        message:
          "Password should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      };
      //Act
      const response: request.Response = await request(app)
        .post("/auth/register")
        .send({
          username: "tapish",
          password: "tapish",
        });
      //Assert
      expect(response.body).toEqual(expectedResponse);
      expect(response.statusCode).toBe(expectedStatus);
    });
  });
});

describe("tests", () => {
  afterEach(() => {
    Sinon.restore();
  });
  it("should register user in database", async () => {
    //Arrange
    const myapi = Sinon.mock();

    const expectedStatus = 201;
    const expectedResponse = {
      error: false,
      message: "User created successfully",
    };
    //Act
    // const response: request.Response = await request(app)
    //   .post("/auth/register")
    //   .send({
    //     username: "tapish",
    //     password: "Tapish@123",
    //   });
    //Assert
    // expect(response.body).toEqual(expectedResponse);
    // expect(response.statusCode).toBe(expectedStatus);
  });
});
