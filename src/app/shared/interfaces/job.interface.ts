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
}

export interface IuserRespone {
  accessToken: string;
  user: Iuser;
}

export interface Iuser {
  email: string;
  id: number;
  jobs: [];
  name: string;
}
