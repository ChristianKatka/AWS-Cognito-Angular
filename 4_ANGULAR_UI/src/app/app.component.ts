import { Component, OnInit } from '@angular/core';
import { AuthActions } from '@auth/store/actions';
import { Store } from '@ngrx/store';
import { State } from './store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Cognito';

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.RefreshTokens.initiate());
  }
}
