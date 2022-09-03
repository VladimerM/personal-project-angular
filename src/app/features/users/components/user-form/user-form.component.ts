import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ijob } from 'src/app/shared/interfaces/job.interface';
import { IuserJob } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  jobFormGroup = new FormGroup<any>('');
  @Output() jobInfo = new EventEmitter<IuserJob>();

  constructor() {}
  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  ngOnInit(): void {
    this.jobFormGroup = new FormGroup({
      company: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      workTime: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      datas: new FormControl('', [Validators.required]),
      information: new FormControl('', [Validators.required]),
      deadline: new FormControl('', [Validators.required]),
    });
  }

  addJob() {
    let { datas, ...jobObj } = this.jobFormGroup.value;
    jobObj.heartSrc = 'assets/images/icons/heart.svg';
    jobObj.heartFilled = false;
    let changedDatas = datas.split(' ');
    changedDatas.forEach((item: string) => {
      item.toLowerCase();
    });
    if (changedDatas.includes(' ')) {
      changedDatas.splice(changedDatas.indexOf(''), 1);
    }
    jobObj.datas = changedDatas;
    jobObj.date = Date.now();
    this.jobInfo.emit(jobObj);
    this.jobFormGroup.reset();
  }
}
