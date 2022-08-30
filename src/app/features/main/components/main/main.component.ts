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
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  jobs: BehaviorSubject<Ijob[]> = new BehaviorSubject([] as Ijob[]);
  filteredJobs!: Ijob[];
  filters: any = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((value) => {
      this.jobs.next(value);
      this.filteredJobs = this.jobs.getValue();
      this.filteredJobs.sort((a: Ijob, b: Ijob) => {
        if (a.date < b.date) {
          return 1;
        } else {
          return -1;
        }
      });
    });
  }

  addFilter(filter: string) {
    if (!this.filters.includes(filter.toLowerCase()))
      this.filters.push(filter.toLowerCase());
    this.filter();
  }

  deleteFilterItem(i: number) {
    this.filters.splice(i, 1);
    this.filter();
  }

  clearFilter() {
    this.filters = [];
    this.filter();
  }

  filter() {
    if (this.filters.length === 0) {
      this.filteredJobs = this.jobs.getValue();
    } else {
      this.filteredJobs = this.jobs.getValue().filter((item: any) => {
        let isFiltered = true;
        for (let data of this.filters) {
          if (!item.datas.includes(data)) {
            isFiltered = false;
          }
        }
        return isFiltered;
      });
    }
  }
}
