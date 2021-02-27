import React from 'react';
import { View } from '@tarojs/components';
import BaseModal from '@/components/BaseModal';
import styles from './index.modules.scss';
import { FormType, EventCycleMode, CalendarType, BaseAnimationType } from '@/constants/index';

type Value = EventCycleMode | CalendarType | string;
type TemplateConfig = Array<{
  name: string;
  type: FormType;
  key: string;
  value: Value;
  options?: Array<{
    key: EventCycleMode | CalendarType,
    name: string
  }>;
  placeholder?: string;
}>

export interface EventTemplate{
  [key:string]: Value;
}
interface Props{
  display: boolean;
  mode: 'add' | 'edit';
  defaultData?: EventTemplate;
  onCloseModal: (reFetch?: boolean) => void;
}

const templateConfig:TemplateConfig = [
  {
    name: '标题',
    type: FormType.INPUT,
    placeholder: '小于五个汉字',
    key: 'title',
    value: '',
  },
  {
    name: '模式',
    type: FormType.RADIO,
    key: 'mode',
    options: [
      {
        key: EventCycleMode.YEAR,
        name: '每年'
      },
      {
        key: EventCycleMode.MONTH,
        name: '每月'
      },
      {
        key: EventCycleMode.SINGLE,
        name: '单次'
      },
    ],
    value: '',
  },
  {
    name: '历法',
    type: FormType.RADIO,
    key: 'calendar',
    options: [
      {
        key: CalendarType.SOLAR,
        name: '阳历 （几号）'
      },
      {
        key: CalendarType.LUNAR,
        name: '农历（初几）'
      },
    ],
    value: '',
  },
]
const EventTemplateModal: React.FC<Props> = ({
  display = false,
  mode = 'add',
  onCloseModal = () => {},
  defaultData
}) => {

  const [config, setConfig] = React.useState<TemplateConfig>([]);

  const handleSubmitModal = () => {
    // 提交修改/新增
    console.log('提交模版数据中...');


    // 成功后关闭modal
    onCloseModal(true);
  }

  React.useEffect(() => {
    if(defaultData && Object.keys(defaultData).length > 0){
      setConfig(templateConfig.map(item => {
        return {
          ...item,
          value: defaultData[item.key]
        }
      }))
    }else{
      setConfig([...templateConfig])
    }
  }, [defaultData])

  return(
    <BaseModal
      display={display}
      zIndex={992}
      animationType={BaseAnimationType.SLIDE_UP}
      modalTitle={mode === 'add' ? '新增事件模版' : '编辑事件模版'}
      onCloseModal={onCloseModal}
      onSubmitModal={handleSubmitModal}
    >
      <View className={styles.preview}></View>
      {
        config.map(item => (
          <View key={item.key}>{item.name}</View>
        ))
      }
    </BaseModal>
  )
}

export default EventTemplateModal;
