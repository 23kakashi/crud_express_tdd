import { Router } from "express";
const authRouter = Router();

//get all person data
authRouter.post("/register", (request, response) => {
  const { username, password } = request.body;
  if (username === "" || password === "") {
    return response
      .status(401)
      .json({ error: true, message: "Please provide username & password" });
  } else if (password.length < 8) {
    return response.status(401).json({
      error: true,
      message: "Password should have minimum 8 characters",
    });
  }
  return response.status(201).send({});
});

export default authRouter;
