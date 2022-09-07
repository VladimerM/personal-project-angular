import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { InterceptorService } from 'src/app/core/interceptor/interceptor.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    FilterComponent,
    JobComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
      },
    ]),
  ],
})
export class MainModule {}
