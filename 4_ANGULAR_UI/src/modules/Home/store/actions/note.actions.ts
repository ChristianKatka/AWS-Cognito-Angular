import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Note, NoteDraft } from '@shared/models/note.model';

export const CreateNote = createActionGroup({
  source: '[Note] Create Note',
  events: {
    Initiate: props<{ noteDraft: NoteDraft }>(),
    Success: props<{ note: Note }>(),
    Error: props<{ error: any }>(),
  },
});

export const GetNotes = createActionGroup({
  source: '[Note] Get Notes',
  events: {
    Initiate: emptyProps(),
    Success: props<{ notes: Note[] }>(),
    Error: props<{ error: any }>(),
  },
});

export const DeleteNote = createActionGroup({
  source: '[Note] Delete Note',
  events: {
    Initiate: props<{ id: string }>(),
    Success: props<{ id: string }>(),
    Error: props<{ error: any }>(),
  },
});
