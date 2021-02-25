import React from 'react';

const useTabBarConfig = (initialDisplayTabBar=true) => {

  const [displayTabBar,setDisplayTabBar] = React.useState(initialDisplayTabBar);

  const handleToggleShowTabBar = () => {
    setDisplayTabBar(displayTabBar => !displayTabBar)
  }

  return {
    displayTabBar,
    handleToggleShowTabBar
  }
}

export default useTabBarConfig;
