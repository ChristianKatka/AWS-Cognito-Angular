import { Context, Next } from "koa";
import { adminInitiateAuthCommandService } from "../../services/auth/admin-initiate-auth-command.service";

export const login = async (ctx: Context, next: Next) => {
  // const postId = ctx.params.postId;
  // const userId = ctx.state.jwtPayload.sub;
  const email = (ctx.request.body as any).email;
  const password = (ctx.request.body as any).password;

  try {
    const loginAuthResponse = await adminInitiateAuthCommandService(
      email,
      password
    );
    ctx.response.body = loginAuthResponse;
  } catch (error) {
    console.log(error);
    console.log(error.message);

    ctx.response.body = {
      errorMessage: error.message,
      error,
    };
  }

  await next();
};
