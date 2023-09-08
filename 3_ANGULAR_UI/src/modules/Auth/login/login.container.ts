import { Component } from '@angular/core';
import { State } from '@app/store';
import { AuthActions } from '@auth/store/actions';
import { AuthUiSelectors } from '@auth/store/selectors';
import { Store } from '@ngrx/store';
import { LoginCredentials } from '@shared/models/credentials.model';

@Component({
  templateUrl: 'login.container.html',
  styleUrls: ['login.container.scss'],
})
export class LoginContainerComponent {
  authUiControlData$ = this.store.select(AuthUiSelectors.getAuthControlData);

  constructor(private store: Store<State>) {}

  login(credentials: LoginCredentials) {
    this.store.dispatch(AuthActions.Login.initiate({ credentials }));
  }
}
