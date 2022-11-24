import { response, Router } from "express";
import log from "../../utils/logger";
// import { logResponse } from "../../utils/logger";
const personRouter = Router();

//get all person data
personRouter.get("/", (request, response) => {
  response.status(200).send();
});

export default personRouter;
