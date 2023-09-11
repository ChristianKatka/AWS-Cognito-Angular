import { Action, createReducer, on } from '@ngrx/store';
import jwt_decode from 'jwt-decode';
import { AuthActions } from '../actions';

export interface AuthTokensState {
  tokens: any;
  decodedAccessToken: any;
}

export const initialState: AuthTokensState = {
  tokens: undefined,
  decodedAccessToken: undefined,
};

const authTokensReducer = createReducer(
  initialState,

  on(
    AuthActions.Register.success,
    AuthActions.Login.success,
    AuthActions.RefreshTokens.success,
    (state, { response }) => {
      // response.AuthenticationResult.AccessToken;
      // response.AuthenticationResult.IdToken;
      // response.AuthenticationResult.RefreshToken;

      return {
        ...state,
        tokens: response.AuthenticationResult,
        decodedAccessToken: jwt_decode(
          response.AuthenticationResult.AccessToken
        ),
      };
    }
  ),

  on(AuthActions.Logout, () => initialState)
);

export const reducer = (state: AuthTokensState | undefined, action: Action) =>
  authTokensReducer(state, action);
