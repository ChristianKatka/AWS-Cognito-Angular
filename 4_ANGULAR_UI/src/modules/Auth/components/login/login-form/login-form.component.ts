import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthCredentials } from '@shared/models/auth-credentials.model';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss'],
})
export class LoginFormComponent implements OnChanges {
  @Input()
  isLoading = false;

  @Input()
  errorMessage: undefined | string = undefined;

  @Output()
  login = new EventEmitter<AuthCredentials>();

  showPassword = false;

  ngOnChanges() {
    if (this.isLoading) {
      this.loginForm.disable();
    } else {
      this.loginForm.enable();
    }
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  submit() {
    this.login.emit(this.loginForm.value);
  }
}
