import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/features/login/services/login.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  jobFormGroup = new FormGroup({
    company: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    workTime: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    datas: new FormControl('', [Validators.required]),
    information: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
  });
  @Output() jobInfo = new EventEmitter<any>();

  constructor(private loginService: LoginService) {}
  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  ngOnInit(): void {}

  addJob() {
    let { datas, ...jobObj } = this.jobFormGroup.value;
    let changedDatas = datas!.split(' ');
    changedDatas.forEach((item: string) => {
      item.toLowerCase();
    });
    if (changedDatas.includes(' ')) {
      changedDatas.splice(changedDatas.indexOf(' '), 1);
    }
    let emmitedObject = {
      ...jobObj,
      heartSrc: 'assets/images/icons/heart.svg',
      datas: changedDatas,
      date: Date.now(),
      owner: this.loginService.loggedUser.user.email,
    };
    this.jobInfo.emit(emmitedObject);

    this.jobFormGroup.reset();
  }
}
