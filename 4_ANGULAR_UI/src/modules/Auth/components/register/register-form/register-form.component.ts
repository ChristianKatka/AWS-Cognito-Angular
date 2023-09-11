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
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.scss'],
})
export class RegisterFormComponent implements OnChanges {
  @Input()
  isLoading = false;

  @Input()
  errorMessage: undefined | string = undefined;

  @Output()
  register = new EventEmitter<AuthCredentials>();

  showPassword = false;

  ngOnChanges() {
    if (this.isLoading) {
      this.registerForm.disable();
    } else {
      this.registerForm.enable();
    }
  }

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  submit() {
    this.register.emit(this.registerForm.value);
  }
}
