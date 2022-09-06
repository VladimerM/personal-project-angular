export interface Ijob {
  img: string;
  company: string;
  title: string;
  workTime: string;
  location: string;
  datas: string[];
  information: string;
  heartSrc: string;
  id: number;
  heartFilled: boolean;
  date: number;
  deadline: string;
  owner: string;
}

export interface IuserResponse {
  accessToken: string;
  user: Iuser;
}

export interface Iuser extends Iregister {
  id: number;
}
export interface IloginUser {
  email: string;
  password: string;
}

export interface Iregister {
  email: string;
  name: string;
  password: string;
}
