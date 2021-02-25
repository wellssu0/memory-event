import React from 'react';
import { View } from '@tarojs/components';
import BaseModal from '@/components/BaseModal';
import styles from './index.modules.scss';

interface Props{
  display: boolean;
  mode: 'add' | 'edit';
  onCloseModal: () => void;

}
const EventTemplateModal: React.FC<Props> = ({
  display = false,
  mode = 'add',
  onCloseModal = () => {},
}) => {

  const handleSubmitModal = () => {
    // 提交修改/新增
    console.log('提交数据中。。。');

    // 成功后关闭modal
    onCloseModal();
  }


  return(
    <BaseModal
      display={display}
      zIndex={992}
      modalTitle={mode === 'add' ? '新增事件模版' : '编辑事件模版'}
      onCloseModal={onCloseModal}
      onSubmitModal={handleSubmitModal}
    >
      <View>fdsfdfdsfdfd</View>
    </BaseModal>
  )
}

export default EventTemplateModal;
