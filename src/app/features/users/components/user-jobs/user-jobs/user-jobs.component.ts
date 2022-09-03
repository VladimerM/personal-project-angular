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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserJobsComponent implements OnInit {
  @Input() jobs: Ijob[] = [] as Ijob[];
  @Output() jobInfo = new EventEmitter<IuserJob>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openJob(job: Ijob) {
    this.router.navigate([`/main/jobs/${job.id}`]);
  }

  onClickDelete(job: Ijob) {
    this.jobInfo.emit(job);
  }

  getPostDate(job: Ijob) {
    if (Math.floor((Date.now() - job.date) / 86400000) < 1) {
      return Math.floor((Date.now() - job.date) / 3600000) + ' hours ago';
    } else {
      return Math.floor((Date.now() - job.date) / 86400000) + ' days ago';
    }
  }
}
