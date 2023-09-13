import { Action, createReducer, on } from '@ngrx/store';
import { NoteActions } from '../actions';
import { Note } from '@shared/models/note.model';
import { AuthActions } from '@auth/store/actions';

export interface NoteState {
  notes: { [id: string]: Note };
  isLoading: any;
}

export const initialState: NoteState = {
  notes: {},
  isLoading: false,
};

const noteReducer = createReducer(
  initialState,

  on(NoteActions.GetNotes.success, (state, { notes }) => {
    const notesMap = notes.reduce(
      (items: { [id: string]: Note }, item: Note) => ({
        ...items,
        [item.id]: item,
      }),
      {}
    );
    return {
      ...state,
      notes: notesMap,
    };
  }),

  on(NoteActions.CreateNote.initiate, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.CreateNote.success, (state, { note }) => {
    const notes = {
      ...state.notes,
      [note.id]: {
        ...note,
      },
    };
    return {
      ...state,
      isLoading: false,
      notes,
    };
  }),
  on(NoteActions.CreateNote.error, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(NoteActions.DeleteNote.success, (state, { id }) => {
    const notes = {
      ...state.notes,
    };
    delete notes[id];

    return {
      ...state,
      notes,
    };
  }),

  on(AuthActions.Logout, () => initialState)
);

export const reducer = (state: NoteState | undefined, action: Action) =>
  noteReducer(state, action);
