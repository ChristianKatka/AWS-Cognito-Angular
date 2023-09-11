import { Injectable } from '@angular/core';
import { RouterActions, State } from '@app/store';
import { AuthTokensSelectors } from '@auth/store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard {
  constructor(private store: Store<State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(AuthTokensSelectors.isAuthenticated).pipe(
      map((isLoggedIn) => this.checkIfUserIsUnauthenticated(isLoggedIn)),
      tap((isUnAuthenticated) => {
        this.ifUserTypesUnAllowedPathInUrlThenRedirect(isUnAuthenticated);
      })
    );
  }

  checkIfUserIsUnauthenticated(isLoggedIn: boolean): boolean {
    // if user is logged in we dont want him to acces login page
    if (isLoggedIn) {
      return false;
    } else {
      return true;
    }
  }

  ifUserTypesUnAllowedPathInUrlThenRedirect(isUnAuthenticated: boolean) {
    const userIsLoggedInSoRedirectToHome = !isUnAuthenticated;

    if (userIsLoggedInSoRedirectToHome) {
      this.store.dispatch(
        RouterActions.navigate({
          commands: ['/home'],
        })
      );
    }
  }
}
