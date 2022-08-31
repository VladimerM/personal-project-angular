import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { IuserJob } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserJobsComponent implements OnInit {
  @Input() jobs: Ijob[] = [] as Ijob[];
  @Output() jobInfo = new EventEmitter<IuserJob>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.jobs);
    }, 3000);
  }

  openJob(job: Ijob) {
    this.router.navigate([`/main/jobs/${job.id}`]);
  }

  onClickDelete(job: any) {
    this.jobInfo.emit(job);
  }
}
