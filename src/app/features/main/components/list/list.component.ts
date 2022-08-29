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
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() jobs: any = [];
  @Output() filterItem = new EventEmitter<string>();

  heartFilled = false;
  favorites: number[] = [];

  constructor(private jobsService: JobsService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites')!);
    }
  }

  onClickChangeHeart(job: Ijob) {
    if (!job.heartFilled) {
      job.heartSrc = 'assets/images/icons/filled-heart.svg';
      job.heartFilled = !job.heartFilled;
      this.favorites.push(job.id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.jobsService.editJobs(job.id, job).subscribe();
    } else {
      job.heartSrc = 'assets/images/icons/heart.svg';
      job.heartFilled = !job.heartFilled;
      this.favorites.splice(this.favorites.indexOf(job.id), 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
      this.jobsService.editJobs(job.id, job).subscribe();
    }
  }

  onAddFilter(data: string) {
    this.filterItem.emit(data);
  }

  openJob(job: Ijob) {
    this.router.navigate([`/main/jobs/${job.id}`]);
  }

  checkDate(job: Ijob): boolean {
    if (Date.now() - job.date < 86400000) {
      console.log(Date.now() - job.date);

      return true;
    } else {
      console.log(Date.now() - job.date);

      return false;
    }
  }

  getPostDate(job: Ijob) {
    return Math.floor((Date.now() - job.date) / 86400000);
  }
}
