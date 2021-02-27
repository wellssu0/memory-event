import React from 'react';
import { ITouchEvent, View, Button } from '@tarojs/components';
import styles from './index.modules.scss';
import Mask from '@/components/Mask';
import { BaseAnimationType } from '@/constants/index';

interface Props{
  display: boolean;
  modalTitle?: string;
  zIndex?: number;
  animationType?: BaseAnimationType;
  onCloseModal?: () => void;
  onSubmitModal?: () => void;
  children: React.ReactNode
}
const BaseModal: React.FC<Props> = ({
  display = false,
  modalTitle = '',
  zIndex = 900,
  animationType = BaseAnimationType.SLIDE_DOWN,
  onCloseModal = () => {},
  onSubmitModal = () => {},
  children
}) => {
  const handleModalWrapClick = (e: ITouchEvent) => {
    e.stopPropagation();
  }

  const handleClose = () => {
    onCloseModal();
  }
  const handleSubmit = () => {
    onSubmitModal();
  }

  return (
    <Mask
      zIndex={zIndex}
      display={display}
      animationType={animationType}
      onClose={onCloseModal}
    >
      <View
        className={styles.baseModalWrap}
        onClick={(e)=> handleModalWrapClick(e)}
      >
        <View className={styles.header}>
            <View className={styles.right}></View>
            <View className={styles.title}>{modalTitle}</View>
            <View className={styles.close} onClick={handleClose}></View>
        </View>
        <View className={styles.content}>{children}</View>
        <View className={styles.footer}>
          <Button className={styles.cancel} hoverClass={styles.hover} onClick={handleClose}>取消</Button>
          <Button className={styles.submit} hoverClass={styles.hover} onClick={handleSubmit}>确定</Button>
        </View>
      </View>
    </Mask>
  )
}

export default React.memo(BaseModal);
