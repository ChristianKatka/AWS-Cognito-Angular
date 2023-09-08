import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { LoginCredentials } from '@shared/models/credentials.model';

export const RefreshTokens = createActionGroup({
  source: '[Auth] Refresh Tokens',
  events: {
    Initiate: emptyProps(),
    Success: props<{ response: any }>(),
    Error: props<{ error: any }>(),
  },
});

export const Login = createActionGroup({
  source: '[Auth] Login',
  events: {
    Initiate: props<{ credentials: LoginCredentials }>(),
    Success: props<{ response: any }>(),
    Error: props<{ error: any; errorMessage: string }>(),
  },
});

export const Logout = createAction('[Auth] Logout');
