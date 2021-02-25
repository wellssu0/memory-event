import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import styles from './index.module.scss';
import BillSvg from '@/assets/tab-bar-icon/bill.svg';
import RiliSvg from '@/assets/tab-bar-icon/rili.svg';
import useSystemInfo from '@/hooks/useSystemInfo';
import useTabBarConfig from '@/hooks/useTabBarConfig';

const tabBarConfig = {
  light:{
    wrapBgColor: 'rgba(255,255,255,0.8)',
    textColor: '#666',
    textSelectedColor: '#ed6c00',
  },
  dark:{
    wrapBgColor: 'rgba(0,0,0,0.9)',
    textColor: '#fff',
    textSelectedColor: '#ed6c00',
  },
  list: [
    {
      pagePath: '/pages/index/index',
      iconPath: RiliSvg,
      selectedIconPath: RiliSvg,
      text: 'event'
    },
    {
      pagePath: '/pages/bill/index',
      iconPath: BillSvg,
      selectedIconPath: BillSvg,
      text: 'bill'
    }
  ]
}

export enum SelectedPage {
  INDEX,
  BILL
}
interface Props{
  selectedIndex: SelectedPage;
  display: boolean;
  onAddAction: () => void
}
const CustomTabBar:React.FC<Props> = ({
  display = true,
  selectedIndex = SelectedPage.INDEX,
  onAddAction = () => {}
}) => {

  const { theme, safeBottom } = useSystemInfo();
  const handleAddAction = () => {
    onAddAction();
  }

  const handleSwitchTabPage = (index: number):void => {
    if(index === selectedIndex) return;
    Taro.switchTab({
      url: tabBarConfig.list[index].pagePath
    })
  }
  console.log('rerender custom tab bar');


  return(
    <View
      className={styles.customTabBarWrap}
      style={{
        bottom: display ? 0 :'-100%',
        opacity: display ? 1 : 0,
        paddingBottom: safeBottom,
        backgroundColor: tabBarConfig[theme].wrapBgColor
      }}
    >
      <View className={styles.customTabBar} >
        {
          tabBarConfig.list.map((item, index) => (
            <View
              className={styles.item}
              onClick={() => handleSwitchTabPage(index)}
            >
              {/* <Image className={styles.icon} src={item.iconPath} /> */}
              <View
                className={styles.text}
                style={{
                  color: index === selectedIndex ? tabBarConfig[theme].textSelectedColor : tabBarConfig[theme].textColor
                }}
              >{item.text}</View>
            </View>
          ))
        }
        <View className={styles.centerBtn} onClick={handleAddAction}>

        </View>
      </View>
    </View>
  )
}

export default React.memo(CustomTabBar);
