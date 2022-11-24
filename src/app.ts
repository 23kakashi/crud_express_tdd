import express, { Application, Request, Response } from "express";
import cors from "cors";
import log from "./utils/logger";
import userRouter from "./routes/user/person.routes";
import authRouter from "./routes/auth/auth.routes";
require("dotenv").config();

const app: Application = express();

//setup
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

export default app;
