import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { AuthCredentials } from '@shared/models/auth-credentials.model';

export const RefreshTokens = createActionGroup({
  source: '[Auth] Refresh Tokens',
  events: {
    Initiate: emptyProps(),
    Success: props<{ response: any }>(),
    Error: props<{ error: any }>(),
  },
});

export const Register = createActionGroup({
  source: '[Auth] Register',
  events: {
    Initiate: props<{ credentials: AuthCredentials }>(),
    Success: props<{ response: any }>(),
    Error: props<{ error: any; errorMessage: string }>(),
  },
});

export const Login = createActionGroup({
  source: '[Auth] Login',
  events: {
    Initiate: props<{ credentials: AuthCredentials }>(),
    Success: props<{ response: any }>(),
    Error: props<{ error: any; errorMessage: string }>(),
  },
});

export const Logout = createAction('[Auth] Logout');
