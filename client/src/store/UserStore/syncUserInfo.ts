import Taro from '@tarojs/taro';
import { StorageKey } from '@/constants/index';
/**
 * 初始化用户信息
 */
export const initialUserInfo = (() => {
  console.log('initialUserInfo start...')
  const userInfoStr = Taro.getStorageSync(StorageKey.USER_INFO);
  let _userInfo:IUserStore.UserInfo = userInfoStr && JSON.parse(userInfoStr) || {};
  console.log('initialUserInfo end...',_userInfo)
  return _userInfo;
})();


/**
 * syncUserInfo for http 同步用户信息
 *
 * @export
 * @param {IUserStore.UserInfo} data
 */
export function syncUserInfo(data: IUserStore.UserInfo) {
  console.log("同步用户信息",data);
  Taro.setStorageSync(StorageKey.USER_INFO,JSON.stringify(data));
}
