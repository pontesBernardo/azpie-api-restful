import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateRegister } from "../middlewares/register.middleware.js";
import { validateLogin } from "../middlewares/login.middleware.js";

const router = Router();

router.post("/register", validateRegister, register);
router.post("/login", validateLogin ,login);

router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).send("Authorized access to admin dashboard.");
});

export default router;
