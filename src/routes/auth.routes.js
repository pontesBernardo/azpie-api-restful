import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).send("Acesso autorizado à dashboard");
});

export default router;
