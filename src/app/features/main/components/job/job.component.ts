import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobComponent implements OnInit {
  job$ = new BehaviorSubject<Ijob>({} as Ijob);
  jobId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsService
  ) {}

  ngOnInit(): void {
    this.jobId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.jobsService.getJob(this.jobId).subscribe((value) => {
      this.job$.next(value);
    });
  }
}
