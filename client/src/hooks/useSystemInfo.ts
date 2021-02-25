import React from 'react';
import Taro from '@tarojs/taro';

const useSystemInfo = () => {

  const [systemInfo, setSystemInfo] = React.useState({
    safeTop:0,
    safeBottom:0,
    theme:'light'
  });

  // 监听暗黑模式变化
  React.useEffect(() => {
    Taro.onThemeChange((res) => {
      setSystemInfo(systemInfo => {
        return {
          ...systemInfo,
          theme: res.theme
        }
      })
    })
    return () => Taro.offThemeChange(res => {console.log(res)});
  }, [])

  React.useEffect(() => {
    Taro.getSystemInfo({
      success: function (res) {
        setSystemInfo({
          safeTop: res.screenHeight - res.safeArea.top,
          safeBottom: res.screenHeight - res.safeArea.bottom,
          theme: res.theme || 'light'
        })
      },
    });
  }, [])

  return {...systemInfo}
}

export default useSystemInfo;
