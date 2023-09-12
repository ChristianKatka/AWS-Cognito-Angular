import { createSelector } from '@ngrx/store';
import { getAuthFeatureState } from '../reducers';

const AuthTokensState = createSelector(
  getAuthFeatureState,
  (state) => state.authTokens
);

export const isAuthenticated = createSelector(AuthTokensState, (state) => {
  if (!state.decodedAccessToken) return false;

  const epochDateTimeNowInSeconds = Math.floor(Date.now() / 1000); // Returns the current time in seconds (Unix epoch)
  const jwtExpirationTime = state.decodedAccessToken.exp;

  const jwtExpirationMinus5Seconds = jwtExpirationTime - 5;

  return jwtExpirationMinus5Seconds > epochDateTimeNowInSeconds;
});

export const getRefreshToken = createSelector(AuthTokensState, (state) => {
  if (!state.tokens) return undefined;

  return state.tokens.RefreshToken;
});

export const getIdToken = createSelector(AuthTokensState, (state) => {
  if (!state.tokens) return undefined;

  return state.tokens.IdToken;
});
