import { Injectable } from '@angular/core';
import { RouterActions, State } from '@app/store';
import { AuthService } from '@auth/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AuthActions } from '../actions';
import { AuthTokensSelectors } from '../selectors';
import { catchCognitoErrorsIfAny } from '../utils/catch-cognito-errors-if-any.util';

@Injectable()
export class AuthEffects {
  refreshTokens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.RefreshTokens.initiate),
      withLatestFrom(this.store.select(AuthTokensSelectors.getRefreshToken)),
      switchMap(([action, refreshToken]) => {
        if (!refreshToken) {
          return of(
            RouterActions.navigate({
              commands: ['/login'],
            })
          );
        }
        return this.authService.refreshTokens(refreshToken).pipe(
          map((response) => {
            return AuthActions.RefreshTokens.success({ response });
          }),
          catchError((error) => {
            console.log(error);
            return of(AuthActions.RefreshTokens.error({ error }));
          })
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login.initiate),
      switchMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          map((response) => {
            return catchCognitoErrorsIfAny(response);
          }),
          catchError((error) =>
            of(AuthActions.Login.error({ error, errorMessage: '' }))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login.success),
      map(() =>
        RouterActions.navigate({
          commands: ['/home'],
        })
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Logout),
      map(() =>
        RouterActions.navigate({
          commands: ['/login'],
        })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<State>
  ) {}
}
