import React, {FC} from 'react';
import { ITouchEvent, View } from '@tarojs/components'
import BottomDrawer from '@/components/BottomDrawer';
import classnames from 'classnames';
import styles from './index.modules.scss';
import { EventTemplate } from '@/components/EventTemplateModal';
interface Props{
  display: boolean;
  templateList: EventTemplate[];
  onCloseDrawer: () => void;
  onSelectedTemplate: (id: string) => void;
  onOpenTemplateModal: () => void;
}
const ActionTemplateDrawer: FC<Props> = ({
  display = false,
  templateList = [],
  onCloseDrawer = () => {},
  onSelectedTemplate = () => {},
  onOpenTemplateModal = () => {},
}) => {

  /** 阻止冒泡 */
  const handleItemWrapClick = (e:ITouchEvent) => {
    e.stopPropagation();
  }

  /** 选择模版 */
  const handleItemClick = (e:ITouchEvent,id: string) => {
    e.stopPropagation();
    onSelectedTemplate(id);
  }

  /** 添加模版 */
  const handleOpenAddTemplateModal = (e:ITouchEvent) => {
    e.stopPropagation();
    onOpenTemplateModal();
  }

  return(
    <BottomDrawer
      display={display}
      onCloseDrawer={onCloseDrawer}
    >
      <View
        className={styles.itemWrap}
        onClick={(e)=>handleItemWrapClick(e)}
      >
        {
          templateList.map(item => (<View className={styles.temp} onClick={(e)=>handleItemClick(e,item._id)}>{item.title}</View>))
        }

        <View
          className={classnames(styles.temp,styles.addBtn)}
          onClick={(e)=>handleOpenAddTemplateModal(e)}
        >+</View>
        {templateList.length === 0 && <View className={styles.tips}> 👈 请先新增事件模版哦</View>}
      </View>

    </BottomDrawer>
  )
}

export default ActionTemplateDrawer;
