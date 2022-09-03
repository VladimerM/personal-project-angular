import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/components/auth/login/login.component';
import { RegisterComponent } from './auth/components/auth/register/register.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
      },
    ]),
  ],
})
export class LoginModule {}
