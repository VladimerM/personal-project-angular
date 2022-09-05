import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [MainComponent, ListComponent, FilterComponent, JobComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
      },
    ]),
  ],
})
export class MainModule {}
