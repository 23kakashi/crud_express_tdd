import { response, Router } from "express";

const personRouter = Router();

//get all person data
personRouter.get("/", (request, response) => {
  response.status(200).send();
});

export default personRouter;
