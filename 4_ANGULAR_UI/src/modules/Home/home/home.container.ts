import { Component } from '@angular/core';
import { State } from '@app/store';
import { AuthActions } from '@auth/store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-container',
  templateUrl: 'home.container.html',
  styleUrls: ['home.container.scss'],
})
export class HomeContainerComponent {
  constructor(private store: Store<State>) {}

  logout() {
    this.store.dispatch(AuthActions.Logout());
  }
}
