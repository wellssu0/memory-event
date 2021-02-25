import React, {FC} from 'react';
import { ITouchEvent, View } from '@tarojs/components'
import BottomDrawer from '@/components/BottomDrawer';
import classnames from 'classnames';
import styles from './index.modules.scss';


interface Props{
  display: boolean;
  onCloseDrawer: () => void;
  onOpenTemplateModal: () => void;
}
const ActionTemplateDrawer: FC<Props> = ({
  display = false,
  onCloseDrawer = () => {},
  onOpenTemplateModal = () => {},
}) => {


  const handleItemWrapClick = (e:ITouchEvent) => {
    e.stopPropagation();
    console.log('handleItemWrapClick');
  }
  const handleItemClick = (e:ITouchEvent,id = 0) => {
    e.stopPropagation();
    console.log(id);

  }

  const handleOpenAddTemplateModal = (e:ITouchEvent) => {
    e.stopPropagation();
    onOpenTemplateModal();
  }
  return(
    <BottomDrawer
      display={display}
      onCloseDrawer={onCloseDrawer}
    >
      <View className={styles.itemWrap} onClick={(e)=>handleItemWrapClick(e)}>

        {/* <View className={styles.temp} onClick={(e)=>handleItemClick(e,item.id)}>fdsfds</View> */}
        <View className={classnames(styles.temp,styles.addBtn)} onClick={(e)=>handleOpenAddTemplateModal(e)}>+</View>

      </View>

    </BottomDrawer>
  )
}

export default ActionTemplateDrawer;
