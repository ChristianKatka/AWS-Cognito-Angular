import { Injectable } from '@angular/core';
import { NoteService } from '@home/services/note.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { NoteActions } from '../actions';

@Injectable()
export class NoteEffects {
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

  constructor(private actions$: Actions, private noteService: NoteService) {}
}
