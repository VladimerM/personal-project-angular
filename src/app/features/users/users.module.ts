import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form/user-form.component';
import { UserJobsComponent } from './components/user-jobs/user-jobs/user-jobs.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UserComponent, UserFormComponent, UserJobsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
  ],
})
export class UserModule {}
