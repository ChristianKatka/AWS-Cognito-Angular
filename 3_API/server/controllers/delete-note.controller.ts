import { Context, Next } from "koa";
import { deleteNoteService } from "../services/delete-note.service";

export const deleteNote = async (ctx: Context, next: Next) => {
  const { id } = ctx.params;

  try {
    const res = await deleteNoteService(id);
    console.log("delete note:", id);
    console.log("response:", res);

    ctx.response.body = { id };
  } catch (error) {
    console.log(error);
    ctx.response.body = {
      error,
    };
  }

  await next();
};
