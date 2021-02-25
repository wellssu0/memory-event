export default {
  pages: [
    "pages/index/index",
    "pages/bill/index"
  ],
  window: {
    navigationBarBackgroundColor: "@navBgColor",
    navigationBarTextStyle: "@navTxtStyle",
    backgroundColor: "@bgColor",
    backgroundTextStyle: "@bgTxtStyle",
    backgroundColorTop: "@bgColorTop",
    backgroundColorBottom: "@bgColorBottom"
  },
  tabBar: {
    custom: false,
    // color: "@tabFontColor",
    // selectedColor: "@tabSelectedColor",
    // backgroundColor: "@tabBgColor",
    // borderStyle: "@tabBorderStyle",
    list: [
      {
        pagePath: "pages/index/index",
        text: "事件"
      },
      {
        pagePath: "pages/bill/index",
        text: "账单"
      }
    ]
  },
  darkmode: true,
  cloud: true,
  themeLocation: "theme.json"
};
