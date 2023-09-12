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

  on(AuthActions.Logout, () => initialState)
);

export const reducer = (state: NoteState | undefined, action: Action) =>
  noteReducer(state, action);
