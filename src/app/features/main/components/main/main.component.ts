import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  jobs: BehaviorSubject<Ijob[]> = new BehaviorSubject([] as Ijob[]);
  filters = new BehaviorSubject<string[]>([]);

  constructor(private jobsService: JobsService) {}

  today = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString().split('-');

  ngOnInit(): void {
    console.log(this.today);

    this.jobsService.getJobs().subscribe((value) => {
      value.map((item: any) => {
        let itemDeadline = item.deadline.toString().split('-');
        if (itemDeadline[0] <= this.today[0]) {
          if (itemDeadline[1] <= this.today[1]) {
            if (itemDeadline[2] < this.today[2]) {
              this.deleteJob(item.id);
            }
          }
        }
      });
      this.jobs.next(value);
    });
  }

  deleteJob(id: number) {
    this.jobsService.deleteJob(id).subscribe();
  }

  addFilter(filter: string) {
    if (!this.filters.getValue().includes(filter.toLowerCase())) {
      // this.filters.push(filter.toLowerCase());
      let arr = this.filters.getValue();
      arr.push(filter.toLowerCase());
      this.filters.next(arr);
    }
    this.filter();
  }

  deleteFilterItem(i: number) {
    let arr = this.filters.getValue().splice(i, 1);
    this.filters.next(arr);
    this.filter();
  }

  clearFilter() {
    this.filters.next([]);
    this.filter();
  }

  filter() {
    if (this.filters.getValue().length === 0) {
      this.jobsService.getJobs().subscribe((value) => {
        this.jobs.next(value);
      });
    } else {
      this.jobsService.getJobs().subscribe((value) => {
        this.jobs.next(
          value.filter((item: any) => {
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