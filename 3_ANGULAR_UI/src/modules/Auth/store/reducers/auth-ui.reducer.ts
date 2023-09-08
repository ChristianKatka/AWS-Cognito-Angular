import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export interface AuthUiState {
  isLoading: boolean;
  error: any;
  errorMessage: string | undefined;
}

export const initialState: AuthUiState = {
  isLoading: false,
  error: undefined,
  errorMessage: undefined,
};

const authUiReducer = createReducer(
  initialState,
  on(AuthActions.Login.initiate, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(AuthActions.Login.success, (state, { response }) => {
    return {
      ...state,
      isLoading: false,
      error: undefined,
      errorMessage: undefined,
    };
  }),
  on(AuthActions.Login.error, (state, { error, errorMessage }) => {
    return {
      ...state,
      isLoading: false,
      error,
      errorMessage,
    };
  }),

  on(AuthActions.Logout, () => initialState)
);

export const reducer = (state: AuthUiState | undefined, action: Action) =>
  authUiReducer(state, action);
