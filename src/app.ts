import express, { Application, Request, Response } from "express";
import cors from "cors";
import { client } from "./config/db";
import userRouter from "./routes/user/person.routes";

const app: Application = express();

//setup
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/user", userRouter);

//connection
const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    await client.connect();
    // console.log(`Listening on Port 8080`);
  } catch (error) {
    // console.error(error);
  }
});

export default app;
