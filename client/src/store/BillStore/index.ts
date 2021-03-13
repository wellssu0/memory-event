import { makeAutoObservable } from 'mobx';

export class BillStore {
  constructor(){
    makeAutoObservable(this);
  }






}

export default new BillStore();
