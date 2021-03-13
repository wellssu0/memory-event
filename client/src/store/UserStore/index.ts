import { action, makeAutoObservable, reaction } from 'mobx';
import { initialUserInfo, syncUserInfo } from './syncUserInfo';
import { loginSever } from '@/server/index';


export class UserStore {
  constructor(){
    makeAutoObservable(this);
    reaction(() => this.userInfo, syncUserInfo);
  }

  userInfo:IUserStore.UserInfo = initialUserInfo;

  login = async (force = false) => {
    if(this.userInfo && Object.keys(this.userInfo).length>0 && !force){
      return;
    }
    console.log('本地无用户信息，登陆中...')
    const res = await loginSever();
    this.setUserInfo(res);
  }

  @action
  setUserInfo = (user: IUserStore.UserInfo): void => {
    this.userInfo = user;
  }


}

export default new UserStore();
