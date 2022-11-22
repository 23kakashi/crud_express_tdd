import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  try {
    // await client.connect();
    console.log(`Listening on Port 8080`);
  } catch (error) {
    console.log(error);
  }
});
