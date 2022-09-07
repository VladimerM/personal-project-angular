import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IloginUser,
  IuserResponse,
} from 'src/app/shared/interfaces/job.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
  });
  passwordType = 'password';
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    if (this.loginFormGroup.valid) {
      this.loginService
        .loginUser(this.loginFormGroup.value as IloginUser)
        .subscribe((value: IuserResponse) => {
          if (value.user) {
            this.loginService.loggedUser = value;
            this.router.navigate(['/user']);
            localStorage.setItem('token', JSON.stringify(value));
            this.loginService.isLogged = true;
          }
        });
    }
  }
  showPasswordIcon = true;
  showPassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.showPasswordIcon = false;
    } else {
      this.passwordType = 'password';
      this.showPasswordIcon = true;
    }
  }
}
