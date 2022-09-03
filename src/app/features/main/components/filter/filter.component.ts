import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Ijob } from 'src/app/shared/interfaces/job.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  // @Input() filters: string[] = [] as string[];
  @Input() filters = new BehaviorSubject<string[]>([]);

  @Output() deleteFilterItemIndex = new EventEmitter<number>();
  @Output() _clearFilter = new EventEmitter<number>();
  @Output() filterItem = new EventEmitter<string>();

  searchFormGroup = new FormGroup<any>('');

  constructor() {}

  ngOnInit(): void {
    this.searchFormGroup = new FormGroup({
      search: new FormControl(''),
    });
  }

  deleteFilterItem(i: number) {
    this.deleteFilterItemIndex.emit(i);
  }

  clearFilter() {
    this._clearFilter.emit();
  }

  addFilter() {
    console.log(this.filters);

    this.filterItem.emit(this.searchFormGroup.get('search')?.value);
    this.searchFormGroup.get('search')?.setValue('');
  }
}
