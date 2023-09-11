import { Injectable } from '@angular/core';
import { RouterActions, State } from '@app/store';
import { AuthTokensSelectors } from '@auth/store/selectors';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(AuthTokensSelectors.isAuthenticated).pipe(
      tap((loggedIn) => {
        this.ifUserTypesUnAllowedPathInUrlThenRedirect(loggedIn);
      })
    );
  }

  ifUserTypesUnAllowedPathInUrlThenRedirect(loggedIn: boolean) {
    if (!loggedIn) {
      this.store.dispatch(
        RouterActions.navigate({
          commands: ['/login'],
        })
      );
    }
  }
}
