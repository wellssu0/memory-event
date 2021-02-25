import React from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import styles from "./index.modules.scss";
import Calendar from "@/utils/calendar";
import CustomTabBar, { SelectedPage } from "@/components/CustomTabBar";
import EventTemplateDrawer from "@/components/EventTemplateDrawer";
import EventTemplateModal from "@/components/EventTemplateModal";
import useTabBarConfig from "@/hooks/useTabBarConfig";
import useEventTemplateModalConfig from "@/hooks/useEventTemplateModalConfig";

const Index = () => {
  const { displayTabBar, handleToggleShowTabBar } = useTabBarConfig(true);
  const {
    displayETModal,
    handleCloseETModal,
    handleSetETModal
  } = useEventTemplateModalConfig({display: false, mode: 'add'});



  /** 打开模版Modal */
  const handleOpenTemplateModal = React.useCallback(() => {
    console.log('执行添加操作');
    handleSetETModal({
      display: true,
      mode: 'add'
    })
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

  useDidShow(() => {
    handleHideTabBar();
  });

  return (
    <View className={styles.pageWrap}>

      <EventTemplateModal
        display={displayETModal.display}
        onCloseModal={handleCloseETModal}
        mode={displayETModal.mode}
      />
      <EventTemplateDrawer
        display={!displayTabBar}
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
