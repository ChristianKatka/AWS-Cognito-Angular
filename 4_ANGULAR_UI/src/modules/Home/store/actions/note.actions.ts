import { createActionGroup, props } from '@ngrx/store';
import { Note, NoteDraft } from '@shared/models/note.model';

export const CreateNote = createActionGroup({
  source: '[Note] Create note',
  events: {
    Initiate: props<{ noteDraft: NoteDraft }>(),
    Success: props<{ note: Note }>(),
    Error: props<{ error: any }>(),
  },
});
