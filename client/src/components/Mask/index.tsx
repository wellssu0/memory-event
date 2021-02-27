import React from 'react';
import { View } from '@tarojs/components';
import styles from './index.modules.scss';
import { BaseAnimationType } from '@/constants/index';
interface Props{
  display: boolean;
  zIndex?: number;
  animationType?: BaseAnimationType;
  onClose: () => void
}

const Mask:React.FC<Props> = ({
  display = false,
  children,
  zIndex = 900,
  animationType = BaseAnimationType.SLIDE_DOWN,
  onClose = () => {}
}) => {
  const handleClick = (e) =>{
    e.preventDefault()
    onClose()
  }
  return <View className={styles.maskWrap} onClick={handleClick} style={{
    backgroundColor: display ? 'rgba($color: #000000, $alpha: 0.2)' : 'transparent',
    transform: display ? '' : animationType,
    opacity: display ? 1 : 0,
    zIndex: zIndex
  }}>{children}</View>
}

export default Mask;
