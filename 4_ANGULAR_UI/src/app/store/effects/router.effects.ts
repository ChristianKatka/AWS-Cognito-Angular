import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { RouterActions } from '../actions';

@Injectable()
export class RouterEffects {
  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.navigate),
        tap(({ commands, extras }) => {
          this.router.navigate(commands, extras);
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private location: Location) {}
}
