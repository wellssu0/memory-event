import Taro from '@tarojs/taro';
import { StorageKey } from '@/constants/index';
import { setStorage, getStorage } from '@/utils/index';

interface Login{
  _id: string;
  _openid: string,
  create_date: Date; username: string;
  avatar: string;
}

/** 拿到用户id */
const getOpenId = async (): Promise<string> => {
  console.log('获取openID中...')
  let userInfo = getStorage(StorageKey.USER_INFO, true);
  if(!userInfo || !(userInfo?.['_openid'])){
    userInfo = await login();
  }
  console.log('获取openID结束',userInfo['_openid'])
  return userInfo['_openid'];
}

/** login */
export const login = async () => {
  console.log('登陆中...')
  const res = await Taro.cloud.callFunction({name: "login"});
  if(res.errMsg === "cloud.callFunction:ok"){
    setStorage(StorageKey.USER_INFO, res.result)
    console.log('登陆成功', res.result)
    return res.result;
  } else{
    return {};
  }
}

/** 获取事件模版列表 */
export const getTemplateList = async () => {
  const openId = await getOpenId();
  const result = await Taro.cloud.database().collection('event_template').where({_openid: openId}).get();
  if(result.errMsg === 'collection.get:ok'){
    return result.data;
  } else {
    return [];
  }
}

/** 获取事件列表 */
export const getEventList = async () => {
  const openId = await getOpenId();
  const result = await Taro.cloud.database().collection('event').where({_openid: openId}).get();
  if(result.errMsg === 'collection.get:ok'){
    return result.data;
  } else {
    return [];
  }
}
