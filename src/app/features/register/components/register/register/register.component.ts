import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregister } from 'src/app/shared/interfaces/job.interface';
import { RegisterService } from '../../../services/register.service';
import { CustomValidators } from '../../../validators/register.validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      [CustomValidators.MatchValidator('password', 'confPassword')]
    ),
  });
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerFormGroup;
  }

  registerUser() {
    let registerObj = {
      email: this.registerFormGroup.get('email')?.value,
      name: this.registerFormGroup.get('name')?.value,
      password: this.registerFormGroup.get('passwordGroup')?.get('password')!
        .value,
    };
    this.registerService
      .registerUser(registerObj as Iregister)
      .subscribe(() => {});
    this.router.navigate(['/main']);
  }
}
