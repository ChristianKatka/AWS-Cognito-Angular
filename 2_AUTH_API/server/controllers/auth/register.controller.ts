import { Context, Next } from "koa";
import { adminConfirmSignUpCommandService } from "../../services/auth/admin-confirm-sign-up-command.service";
import { signUpCommandService } from "../../services/auth/sign-up-command.service";
import { adminInitiateAuthCommandService } from "../../services/auth/admin-initiate-auth-command.service";

export const register = async (ctx: Context, next: Next) => {
  const email = (ctx.request.body as any).email;
  const password = (ctx.request.body as any).password;

  try {
    // signup AKA register to cognito
    const signUpResponse = await signUpCommandService(email, password);

    // admin confirm given user. (now no need for user to verify itself via email)
    const confirmSignUpResponse = await adminConfirmSignUpCommandService(email);

    // authenticate given user -> get back tokens
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
