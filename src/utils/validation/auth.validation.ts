export const registrationValidation = (username: string, password: string) => {
  if (username.length < 4) {
    return {
      status: 401,
      error: true,
      message: "Username should have minimum 4 characters",
    };
  } else if (!passwordValidation(password)) {
    return {
      status: 401,
      error: true,
      message:
        "Password should have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
    };
  }
  return {
    status: 200,
    error: false,
    message: "valid username and password",
  };
};

const passwordValidation = (password: string) => {
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(password);
};
