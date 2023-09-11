import { Component } from '@angular/core';
import { State } from '@app/store';
import { AuthActions } from '@auth/store/actions';
import { AuthUiSelectors } from '@auth/store/selectors';
import { Store } from '@ngrx/store';
import { AuthCredentials } from '@shared/models/auth-credentials.model';

@Component({
  templateUrl: 'register.container.html',
  styleUrls: ['register.container.scss'],
})
export class RegisterContainerComponent {
  authUiControlData$ = this.store.select(AuthUiSelectors.getAuthControlData);

  constructor(private store: Store<State>) {}

  register(credentials: AuthCredentials) {
    this.store.dispatch(AuthActions.Register.initiate({ credentials }));
  }
}
