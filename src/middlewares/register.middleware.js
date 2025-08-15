import validator from "validator";

export function validateRegister(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ error: "Name, email, and password are required." });

  if (!validator.isLength(name, { min: 4, max: 26 }))
    return res
      .status(400)
      .json({ error: "The name must be at least 4 characters." });

  if (!validator.isEmail(email))
    return res.status(400).json({ error: "Invalid email format." });

  if (!validator.isStrongPassword(password))
    return res.status(400).json({
      error:
        "Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
    });

  next();
}
