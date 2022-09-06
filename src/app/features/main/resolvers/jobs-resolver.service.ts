import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { JobsService } from '../services/jobs.service';

@Injectable({
  providedIn: 'root',
})
export class JobsResolverService {
  constructor(private jobsService: JobsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Ijob[]> | Promise<Ijob[]> | Ijob[] {
    return this.jobsService.getJobs();
  }
}
