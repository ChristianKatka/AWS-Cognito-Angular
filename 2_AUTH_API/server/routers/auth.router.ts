import Router from "koa-router";
import { login } from "../controllers/auth/login.controller";
import { register } from "../controllers/auth/register.controller";

const authRouter = new Router({ prefix: "/auth" });
authRouter.post("/register", register);
authRouter.post("/login", login);

export { authRouter };
