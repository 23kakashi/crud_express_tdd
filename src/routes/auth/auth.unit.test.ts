import sinon from "sinon";
import request from "supertest";
import app from "../../app";
import * as query from "../../database/user.query";

describe("Registration API (POST /auth/register)", () => {
  beforeEach(() => {});

  afterEach(() => {
    sinon.restore();
  });

  describe("username", () => {
    it("should respond 201 if username is minnimum 4 character long", async () => {
      //Arrange
      const expectedStatus = 201;
      const expectedResponse = {
        error: false,
        message: "User created successfully",
      };
      //Act
      sinon.stub(query, "registerUser").resolves([]);
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
      sinon.stub(query, "registerUser").resolves([]);

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
      sinon.stub(query, "registerUser").resolves([]);

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
      sinon.stub(query, "registerUser").resolves([]);

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
      sinon.stub(query, "registerUser").resolves([]);

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

  it("should register user in database", async () => {
    //Arrange
    const expectedStatus = 201;
    const expectedResponse = {
      error: false,
      message: "User created successfully",
    };
    sinon.stub(query, "registerUser").resolves([]);
    //Act
    const response: request.Response = await request(app)
      .post("/auth/register")
      .send({
        username: "tapish123",
        password: "Tapish@123",
      });
    // Assert;
    expect(response.body).toEqual(expectedResponse);
    expect(response.statusCode).toBe(expectedStatus);
  });
});

describe("Get users API (GET /auth/data)", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should get all users", async () => {
    //Arrange
    const expectedStatus = 200;
    const expectedResponse = {
      error: false,
      message: "success",
      data: [
        {
          id: 2,
          username: "aniket",
          password: "Tefft@123",
          createdAt: "2022-11-24T08:07:20.579Z",
        },
        {
          id: 18,
          username: "tapish",
          password: "Tapish@123",
          createdAt: "2022-11-24T09:09:11.379Z",
        },
      ],
    };
    sinon.stub(query, "getAllUser").resolves([
      {
        id: 2,
        username: "aniket",
        password: "Tefft@123",
        createdAt: "2022-11-24T08:07:20.579Z",
      },
      {
        id: 18,
        username: "tapish",
        password: "Tapish@123",
        createdAt: "2022-11-24T09:09:11.379Z",
      },
    ]);
    //Act
    const response: request.Response = await request(app).get("/auth/data");

    // Assert;
    expect(response.body).toEqual(expectedResponse);
    expect(response.statusCode).toBe(expectedStatus);
  });
});
