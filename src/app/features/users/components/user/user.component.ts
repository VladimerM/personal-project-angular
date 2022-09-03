import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from 'src/app/features/login/services/login.service';
import { Ijob, IuserResponse } from 'src/app/shared/interfaces/job.interface';
import { IuserJob } from '../../interfaces/user.interfaces';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private loginService: LoginService
  ) {}

  userJobs: BehaviorSubject<Ijob[]> = new BehaviorSubject([] as Ijob[]);
  loggedUser!: IuserResponse;
  ngOnInit(): void {
    this.loggedUser = this.loginService.loggedUser;
    this.updateLyst();
  }

  onClickDelete(job: IuserJob) {
    if (confirm('You sure want to delete vacancie')) {
      this.userService.deleteJob(job.id).subscribe(() => {
        this.updateLyst();
      });
    }
  }
  addJob(job: Ijob) {
    job.owner = this.loginService.loggedUser.user.email;
    this.userService.postJob(job).subscribe(() => {
      this.updateLyst();
    });
  }

  updateLyst() {
    this.userService
      .getJobs(this.loginService.loggedUser.user.email)
      .subscribe((value) => {
        this.userJobs.next(value);
      });
  }
}
