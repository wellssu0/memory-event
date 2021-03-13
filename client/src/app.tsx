import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import StoreProvider from '@/components/StoreProvider';
import * as store from '@/store/index';
import './app.scss'

class App extends Component {

  async componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
    store.userStore.login();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return(
      <StoreProvider store={store}>
        {this.props.children}
      </StoreProvider>
    )
  }
}

export default App
