import React from 'react';
import { getTemplateList } from '@/server/index';
import { EventCycleMode, CalendarType } from '@/constants/index';

type Value = EventCycleMode | CalendarType | string;

type ModeType = 'add' | 'edit';

interface ModelState{
  display: boolean;
  mode: ModeType;
  templateList: EventTemplate[];
}

export interface EventTemplate{
  [key:string]: Value;
}


const useEventTemplateModalConfig = ({
  display = false,
  mode = 'add',
  templateList = []
}:ModelState) => {

  const [displayETModal,setDisplayETModal] = React.useState<ModelState>({
    display: display,
    mode: mode,
    templateList: templateList
  });

  /** 拉取模版列表 */
  const fetchTemplateList = async () => {
    console.log('拉取模版列表...')
    const templateListData = await getTemplateList();
    setDisplayETModal(displayETModal => {
      return {
        ...displayETModal,
        templateList: templateListData
      }
    });
  }

  /** 关闭编辑模版modal */
  const handleCloseETModal = (reFetch = false) => {
    setDisplayETModal(displayETModal => {
      return {
        ...displayETModal,
        display: false
      }
    })
    if(reFetch) fetchTemplateList();
  }

  /** 设置编辑模版modal的回显数据 */
  const handleSetETModal = (obj:ModelState) => {
    setDisplayETModal(displayETModal => {
      return {
        ...displayETModal,
        display: obj.display,
        mode: obj.mode
      }
    })
  }

  React.useEffect(() => {
    fetchTemplateList();
  },[])

  return {
    displayETModal,
    handleCloseETModal,
    handleSetETModal
  }
}

export default useEventTemplateModalConfig;
