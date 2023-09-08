import { Context, Next } from "koa";
import { adminInitiateAuthWithRefreshTokenService } from "../../services/auth/admin-initiate-auth-with-refresh-token.service";

export const refreshTokens = async (ctx: Context, next: Next) => {
  // const postId = ctx.params.postId;
  // const userId = ctx.state.jwtPayload.sub;
  const refreshToken = (ctx.request.body as any).refreshToken;

  try {
    const response = await adminInitiateAuthWithRefreshTokenService(
      refreshToken
    );
    ctx.response.body = response;
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
