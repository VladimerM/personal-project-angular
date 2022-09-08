import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserJobsComponent } from './components/user-jobs/user-jobs.component';
import { SharedModule } from '../../shared/shared.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { DeleteDirective } from './directive/delete.directive';

@NgModule({
  declarations: [UserComponent, UserFormComponent, UserJobsComponent, DeleteDirective],
  imports: [
    CommonModule,
    SharedModule,
    EditorModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class UserModule {}
