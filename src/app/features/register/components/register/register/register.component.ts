import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup<any>('');
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required]),
    });
  }

  registerUser() {
    let { confPassword, ...others } = this.registerFormGroup.value;
    others.jobs = [];
    this.registerService.registerUser(others).subscribe((value) => {
      console.log(value);
    });
    console.log(this.registerFormGroup.value);
    this.router.navigate(['/main']);
  }
}
