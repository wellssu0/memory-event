import React from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.modules.scss";
import Calendar from "@/utils/calendar";
import CustomTabBar, { SelectedPage } from "@/components/CustomTabBar";
import EventTemplateDrawer from "@/components/EventTemplateDrawer";
import EventTemplateModal, {EventTemplate} from "@/components/EventTemplateModal";
import useTabBarConfig from "@/hooks/useTabBarConfig";
import useEventTemplateModalConfig from "@/hooks/useEventTemplateModalConfig";
import { getEventList } from '@/server/index';


const Index = () => {
  const [eventList, setEventList] = React.useState([]);
  const { displayTabBar, handleToggleShowTabBar } = useTabBarConfig(true);
  const {
    displayETModal,
    handleCloseETModal,
    handleSetETModal
  } = useEventTemplateModalConfig({display: false, mode: 'add',templateList: []});




  /** 打开模版Modal */
  const handleOpenTemplateModal = React.useCallback(() => {
    console.log('执行添加操作');
    handleSetETModal({
      ...displayETModal,
      display: true,
      mode: 'add'
    })
  },[])

  /** 打开事件Modal */
  const handleOpenEventModal = React.useCallback((template_id) => {
    console.log('执行添加操作,template_id',template_id);
    // handleSetETModal({
    //   display: true,
    //   mode: 'add'
    // })
  },[])

  /** 隐藏custom tabBar，打开模版抽屉 */
  const handleTabBarAddAction = React.useCallback(() => {
    handleToggleShowTabBar();
  },[])

  /** 隐藏原生的tabBar */
  const handleHideTabBar = () => {
    Taro.hideTabBar({
      success: res => {
        console.log(res);
      }
    });
  };

  /** 获取事件列表 */
  const fetchEventList = async () => {
    const result = await getEventList();
    console.log('fetchEventList', result);

    setEventList(result);
  }

  useDidShow(async () => {
    handleHideTabBar();
  });

  React.useEffect(() => {
    fetchEventList();
  }, [])

  return (
    <View className={styles.pageWrap}>
      <View className={styles.eventListWrap}>
        {
          eventList.map(item => (<View key={item._id}>{item.title}</View>))
        }
      </View>

      <EventTemplateModal
        display={displayETModal.display}
        onCloseModal={handleCloseETModal}
        mode={displayETModal.mode}
      />
      <EventTemplateDrawer
        display={!displayTabBar}
        templateList={displayETModal.templateList}
        onSelectedTemplate={handleOpenEventModal}
        onCloseDrawer={handleToggleShowTabBar}
        onOpenTemplateModal={handleOpenTemplateModal}
      />
      <CustomTabBar
        display={displayTabBar}
        selectedIndex={SelectedPage.INDEX}
        onAddAction={handleTabBarAddAction}
      />
    </View>
  );
};

export default Index;
