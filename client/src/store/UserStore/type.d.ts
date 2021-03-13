import { UserStore as UserStoreModel } from './index';

export as namespace IUserStore;
export interface UserStore extends UserStoreModel{}

interface UserInfo{
  avatar: string;
  create_date: Date;
  username: string;
  _id: string;
  _openid: string;
}
