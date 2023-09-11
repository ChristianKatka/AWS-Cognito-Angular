import { Component } from '@angular/core';
import { State } from '@app/store';
import { AuthActions } from '@auth/store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar-bar',
  templateUrl: 'navbar.container.html',
  styleUrls: ['navbar.container.scss'],
})
export class NavbarContainerComponent {
  constructor(private store: Store<State>) {}

  logout() {
    this.store.dispatch(AuthActions.Logout());
  }
}
