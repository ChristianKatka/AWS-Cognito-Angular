import { createSelector } from '@ngrx/store';
import { getNoteFeatureState } from '../reducers';

const notesState = createSelector(getNoteFeatureState, (state) => state.notes);

export const getNotesControlData = createSelector(notesState, (state) => {
  return {
    isLoading: state.isLoading,
    notes: Object.values(state.notes),
  };
});
