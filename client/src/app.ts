import React, { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'

class App extends Component {

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }

    try {
      var UserInfo = Taro.getStorageSync('UserInfo')
      if (!UserInfo) this.login()
    } catch (e) {
      this.login()
    }
  }

  login(){
    Taro.cloud
      .callFunction({
        name: "login",
      })
      .then(res => {
        if(res.errMsg === "cloud.callFunction:ok"){
          Taro.setStorage({
            key:'UserInfo',
            data : JSON.stringify(res.result)
          })
        }
      })
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
