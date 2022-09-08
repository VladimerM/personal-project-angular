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
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  @Input() jobs!: Ijob[];
  @Output() filterItem = new EventEmitter<string>();

  heartFilled = false;
  favorites: number[] = [];

  constructor(private jobsService: JobsService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites')!);
    }
  }

  onClickChangeHeart(job: Ijob): void {
    if (job.heartSrc !== 'assets/images/icons/filled-heart.svg') {
      job.heartSrc = 'assets/images/icons/filled-heart.svg';
      this.favorites.push(job.id);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    } else {
      job.heartSrc = 'assets/images/icons/heart.svg';
      this.favorites.splice(this.favorites.indexOf(job.id), 1);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  onAddFilter(data: string): void {
    this.filterItem.emit(data);
  }

  openJob(job: Ijob): void {
    this.router.navigate([`/main/jobs/${job.id}`]);
  }

  checkDate(job: Ijob): boolean {
    if (Date.now() - job.date < 86400000) {
      return true;
    } else {
      return false;
    }
  }

  getPostDate(job: Ijob): string {
    if (Math.floor((Date.now() - job.date) / 86400000) < 1) {
      return Math.floor((Date.now() - job.date) / 3600000) + ' hours ago';
    } else {
      return Math.floor((Date.now() - job.date) / 86400000) + ' days ago';
    }
  }

  page = 1;

  onTableDataChange(event: number): void {
    this.page = event;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
