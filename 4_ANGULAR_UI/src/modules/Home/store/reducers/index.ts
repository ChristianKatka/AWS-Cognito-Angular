import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromNote from './note.reducer';

// Used in module import forFeature to add this module state part of application state
export const featureKey = 'note';

// Just a interface representing this feature AKA module slices of state
interface NoteFeatureState {
  notes: fromNote.NoteState;
}

// Unite this feature AKA module slices of state together
export const reducers: ActionReducerMap<NoteFeatureState> = {
  notes: fromNote.reducer,
};

// Export feature state aka this modules state so selectors can use it and grab data what they want from the state
export const getNoteFeatureState =
  createFeatureSelector<NoteFeatureState>(featureKey);
