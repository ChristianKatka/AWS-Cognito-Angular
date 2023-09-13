import { Injectable } from '@angular/core';
import { NoteService } from '@home/services/note.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NoteActions } from '../actions';
import { RouterActions } from '@app/store';

@Injectable()
export class NoteEffects {
  getNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.GetNotes.initiate),
      switchMap(() =>
        this.noteService.getNotes().pipe(
          map((notes) => {
            return NoteActions.GetNotes.success({
              notes,
            });
          }),
          catchError((error) => of(NoteActions.GetNotes.error({ error })))
        )
      )
    )
  );

  createNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.CreateNote.initiate),
      switchMap(({ noteDraft }) =>
        this.noteService.createNote(noteDraft).pipe(
          map((note) => {
            return NoteActions.CreateNote.success({
              note,
            });
          }),
          catchError((error) => of(NoteActions.CreateNote.error({ error })))
        )
      )
    )
  );

  createNoteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.CreateNote.success),
      map(() =>
        RouterActions.navigate({
          commands: ['/home'],
        })
      )
    )
  );

  deleteNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NoteActions.DeleteNote.initiate),
      switchMap(({ id }) =>
        this.noteService.deleteNote(id).pipe(
          map(({ id }) => {
            return NoteActions.DeleteNote.success({
              id,
            });
          }),
          catchError((error) => of(NoteActions.DeleteNote.error({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private noteService: NoteService) {}
}
