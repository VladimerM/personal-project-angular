import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../core/interceptor/interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [HttpClientModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
})
export class SharedModule {}
