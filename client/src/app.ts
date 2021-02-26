import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'
import { login } from '@/server/index';
import { getStorage } from '@/utils/index';
import { StorageKey } from '@/constants/index';

class App extends Component {

  async componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }

    try {
      let userInfo = getStorage(StorageKey.USER_INFO, true)
      console.log('获取本地userInfo',userInfo)
      if (!userInfo || Object.keys(userInfo).length === 0){
        await login();
      }
    } catch (e) {
      await login();
    }
  }



  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
