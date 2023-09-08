import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromAuthTokens from './auth-tokens.reducer';
import * as fromAuthUi from './auth-ui.reducer';

// Used in module import forFeature to add this module state part of application state
export const featureKey = 'auth';

// Just a interface representing this feature AKA module slices of state
interface AuthFeatureState {
  authUI: fromAuthUi.AuthUiState;
  authTokens: fromAuthTokens.AuthTokensState;
}

// sync one slice of state AKA reducer to localstorage this time we are syncing authTokens
const localStorageSyncReducer = (
  reducer: ActionReducer<AuthFeatureState>
): ActionReducer<AuthFeatureState> => {
  return localStorageSync({
    keys: ['authTokens'],
    rehydrate: true,
  })(reducer);
};
export const metaReducers: Array<MetaReducer<AuthFeatureState, any>> = [
  localStorageSyncReducer,
];

// Unite this feature AKA module slices of state together
export const reducers: ActionReducerMap<AuthFeatureState> = {
  authUI: fromAuthUi.reducer,
  authTokens: fromAuthTokens.reducer,
};

// Export feature state aka this modules state so selectors can use it and grab data what they want from the state
export const getAuthFeatureState =
  createFeatureSelector<AuthFeatureState>(featureKey);
