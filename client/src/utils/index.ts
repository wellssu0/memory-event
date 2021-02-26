import Taro from '@tarojs/taro';
import { StorageKey } from '@/constants/index';

export const getStorage = (key: StorageKey, isJson: boolean = false): any => {
  let val;
  try {
    val = Taro.getStorageSync(key)
  } catch (e) {
    val = isJson ? '{}' : ''
  }
  return isJson ? JSON.parse(val ? val : '{}') : val
}

export const setStorage = (key: StorageKey, data: any): void => {
  let tempData = '';
  if(typeof data === 'string'){
    tempData = data;
  }else{
    tempData = JSON.stringify(data);
  }
  try {
    Taro.setStorageSync(key, tempData)
  } catch (e) { }
}
