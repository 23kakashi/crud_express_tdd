import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./routes/user/person.routes";
import authRouter from "./routes/auth/auth.routes";
require("dotenv").config();
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";
// console.log(swaggerDocument);

const app: Application = express();

//setup
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

export default app;
