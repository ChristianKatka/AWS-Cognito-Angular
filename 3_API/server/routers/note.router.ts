import Router from "koa-router";
import { getNotes } from "../controllers/get-notes.controller";
import { createNote } from "../controllers/create-note.controller";
import { deleteNote } from "../controllers/delete-note.controller";

const noteRouter = new Router();
noteRouter.get("/note", getNotes);
noteRouter.post("/note", createNote);
noteRouter.delete("/note/:id", deleteNote);

export { noteRouter };
