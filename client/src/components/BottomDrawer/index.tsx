import React from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import styles from './index.modules.scss';
import useSystemInfo from '@/hooks/useSystemInfo';
import Mask from '@/components/Mask';
interface Props{
  display: boolean;
  onCloseDrawer: () => void;
}
const BottomDrawer:React.FC<Props> = ({
  display = false,
  onCloseDrawer = () => {},
  children
}) => {

  const { theme, safeBottom } = useSystemInfo();

  return (
    <Mask
      display={display}
      onClose={onCloseDrawer}
    >
      <View
        className={classnames(styles.drawerWrap,theme === 'dark' ?styles.dark:'')}
        style={{
          paddingBottom: safeBottom+ 'px',
        }}
      >
        {children}
      </View>
    </Mask>
  )
}

export default BottomDrawer;
