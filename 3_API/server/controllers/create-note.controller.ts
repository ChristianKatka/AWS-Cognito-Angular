import { Context, Next } from "koa";
import { Note, NoteDraft } from "../models/note.model";
import { createNoteService } from "../services/create-note.service";
import { v4 as uuidv4 } from "uuid";

export const createNote = async (ctx: Context, next: Next) => {
  const noteDraft: NoteDraft = ctx.request.body as NoteDraft;

  const note: Note = { ...noteDraft, id: uuidv4() };

  try {
    const res = await createNoteService(note);
    console.log("create note:", note);
    console.log("response:", res);

    ctx.response.body = note;
  } catch (error) {
    console.log(error);
    ctx.response.body = {
      error,
    };
  }

  await next();
};
