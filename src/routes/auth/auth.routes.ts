import { Router } from "express";
import { getAllUser, registerUser } from "../../database/user.query";
import log from "../../utils/logger";
import { registrationValidation } from "../../utils/validation/auth.validation";
const authRouter = Router();

//get all person data
authRouter.post("/register", async (request, response) => {
  const { username, password } = request.body;
  const { status, error, message } = registrationValidation(username, password);
  if (error) {
    return response.status(status).json({
      error,
      message,
    });
  }
  // if username and password are valid
  try {
    await registerUser(username, password);
    return response.status(201).send({
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    log.error(error);
    return response.status(500).send({
      error: true,
      message: "",
    });
  }
});

authRouter.get("/data", async (request, response) => {
  console.log("first");
  try {
    const allUsers = await getAllUser();
    return response.status(200).json({
      error: false,
      message: "success",
      data: allUsers,
    });
  } catch (error) {
    log.error(error);
    return response.status(404).json({
      error: true,
      message: "aniket",
    });
  }
});

export default authRouter;
