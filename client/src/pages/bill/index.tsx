import React from 'react'
import Taro, { useDidShow,useTabItemTap } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './index.modules.scss'
import CustomTabBar, { SelectedPage } from '@/components/CustomTabBar'

const Bill = () => {

  useDidShow(() => {
    handleHideTabBar()
  })


  const handleHideTabBar = () => {
    Taro.hideTabBar({
      success: (res) => {
        console.log(res)
      }
    })
  }



  useTabItemTap(item => {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  })

  return(
    <View className={styles.pageWrap}>

      <CustomTabBar selectedIndex={SelectedPage.BILL}/>
    </View>
  )
}

export default Bill;
