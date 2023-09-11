import { createSelector } from '@ngrx/store';
import { getAuthFeatureState } from '../reducers';

const authUState = createSelector(getAuthFeatureState, (state) => state.authUI);

export const getAuthControlData = createSelector(authUState, (state) => {
  return {
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
  };
});
