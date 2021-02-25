import React from 'react';
import { View } from '@tarojs/components';
import styles from './index.modules.scss';
interface Props{
  display: boolean;
  zIndex?: number;
  onClose: () => void
}
const Mask:React.FC<Props> = ({
  display = false,
  children,
  zIndex = 900,
  onClose = () => {}
}) => {
  // const handleClick = (e) =>{
  //   e.preventDefault()
  //   onClose()
  // }
  return <View className={styles.maskWrap} onClick={onClose} style={{
    backgroundColor: display ? 'rgba($color: #000000, $alpha: 0.2)' : 'transparent',
    bottom: display ? 0 : '-100%',
    opacity: display ? 1 : 0,
    zIndex: zIndex
  }}>{children}</View>
}

export default Mask;
