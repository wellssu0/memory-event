import React from 'react';
import { ITouchEvent, View, Button } from '@tarojs/components';
import styles from './index.modules.scss';
import Mask from '@/components/Mask';

interface Props{
  display: boolean;
  modalTitle?: string;
  zIndex?: number;
  onCloseModal?: () => void;
  onSubmitModal?: () => void;
}
const BaseModal: React.FC<Props> = ({
  display = false,
  modalTitle = '',
  zIndex = 900,
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
      onClose={onCloseModal}
    >
      <View className={styles.baseModalWrap} onClick={(e)=> handleModalWrapClick(e)}>
        <View className={styles.header}>
            <View className={styles.right}></View>
            <View className={styles.title}>{modalTitle}</View>
            <View className={styles.close} onClick={handleClose}></View>
        </View>
        <View className={styles.content}>{children}</View>
        <View className={styles.footer}>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleSubmit}>确定</Button>
        </View>
      </View>
    </Mask>
  )
}

export default React.memo(BaseModal);
