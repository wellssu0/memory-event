import React from "react";
import { View, Input, BaseEventOrig } from "@tarojs/components";
import styles from "./index.modules.scss";
import { InputProps } from "@tarojs/components/types/Input";
import IconFont from "@/components/iconfont";
import classnames from "classnames";

interface Props {
  title: string;
  value: string;
  warn?: string;
  display: boolean;
  placeholder?: string;
  onChange: (val: string) => void;
}
const BaseInput: React.FC<Props> = ({
  title = "",
  value = "",
  warn = "",
  display = true,
  placeholder = "请输入",
  onChange = () => {}
}) => {

  const handleInput = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    console.log("input", e.detail);
    onChange(e.detail.value);
  };

  const handleEmpty = () => {
    onChange("");
  };

  return (
    <View
      className={classnames(styles.formItemWrap, display ? "" : styles.hidden)}
    >
      <View className={styles.itemTitle}>{title}</View>
      <View className={styles.inputWrap}>
        <Input
          className={classnames(styles.input, warn ? styles.shake : "")}
          value={value}
          onInput={handleInput}
          placeholder={placeholder}
        />
        {value && (
          <View className={styles.empty} onClick={handleEmpty}>
            <IconFont name="delete1" size={40} color="#666" />
          </View>
        )}
        {warn && <View className={styles.warn}>{warn}</View>}
      </View>
    </View>
  );
};

export default BaseInput;
