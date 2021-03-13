import { makeAutoObservable } from 'mobx'

export class SystemStore{
  constructor(){
    makeAutoObservable(this)
  }


}


export default new SystemStore();
