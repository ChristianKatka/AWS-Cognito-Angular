import { Context, Next } from "koa";
import { getNotesService } from "../services/get-notes.service";

export const getNotes = async (ctx: Context, next: Next) => {
  try {
    const res = await getNotesService();
    ctx.response.body = res;
  } catch (error) {
    console.log(error);
    ctx.response.body = {
      error,
    };
  }

  await next();
};
