import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from 'src/app/core/components/header/service/loader.service';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { Observable } from 'tinymce';
import { JobsService } from '../../services/jobs.service';

interface dummy {
  jobs: Ijob[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  jobs: BehaviorSubject<Ijob[]> = new BehaviorSubject([] as Ijob[]);
  filters = new BehaviorSubject<string[]>([]);

  constructor(
    private jobsService: JobsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService
  ) {}

  today = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString().split('-');

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((value) => {
      this.jobs.next(value);
    });
  }

  deleteJob(id: number) {
    this.jobsService.deleteJob(id).subscribe();
  }

  addFilter(filter: string): void {
    if (!this.filters.getValue().includes(filter.toLowerCase())) {
      let arr = this.filters.getValue();
      arr.push(filter.toLowerCase());
      this.filters.next(arr);
    }
    this.filter();
  }

  deleteFilterItem(i: number): void {
    let arr = this.filters.getValue();
    arr.splice(i, 1);
    this.filters.next(arr);
    this.filter();
  }

  clearFilter(): void {
    this.filters.next([]);
    this.filter();
  }

  filter(): void {
    if (this.filters.getValue().length === 0) {
      this.jobsService.getJobs().subscribe((value) => {
        this.jobs.next(value);
      });
    } else {
      this.jobsService.getJobs().subscribe((value) => {
        this.jobs.next(
          value.filter((item: Ijob) => {
            let isFiltered = true;
            for (let data of this.filters.getValue()) {
              if (!item.datas.includes(data)) {
                isFiltered = false;
              }
            }
            return isFiltered;
          })
        );
      });
    }
  }
}
