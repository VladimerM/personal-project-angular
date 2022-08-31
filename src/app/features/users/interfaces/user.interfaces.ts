import { Ijob } from 'src/app/shared/interfaces/job.interface';

export interface IuserJob extends Ijob {
  owner: string;
}
