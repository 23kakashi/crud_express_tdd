import { Router } from "express";
import { registerUser } from "../../database/user.query";
import { registrationValidation } from "../../utils/validation/auth.validation";
const authRouter = Router();

//get all person data
authRouter.post("/register", async (request, response) => {
  const { username, password } = request.body;
  const { status, error, message } = registrationValidation(username, password);
  if (error) {
    return {
      error,
      status,
      message,
    };
  }
  // if username and password are valid
  await registerUser(username, password);
  return response.status(201).send({
    error: false,
    message: "User created successfully",
  });
});

export default authRouter;
