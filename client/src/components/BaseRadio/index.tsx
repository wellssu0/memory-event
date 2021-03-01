import React from "react";
import { View } from "@tarojs/components";
import styles from "./index.modules.scss";
import classnames from "classnames";

interface Option {
  name: string;
  key: string;
}
interface Props<T> {
  title: string;
  value: string;
  display: boolean;
  options: T[];
  onChange: (val: string) => void;
}
const BaseRadio = <T extends Option>({
  title = "",
  value = "",
  display = true,
  options = [],
  onChange = () => {}
}: Props<T>) => {
  const handleClick = (key: string) => {
    if (key === value) return;
    onChange(key);
  };
  return (
    <View
      className={classnames(styles.formItemWrap, display ? "" : styles.hidden)}
    >
      <View className={styles.itemTitle}>{title}</View>
      <View className={styles.radioWrap}>
        {options.map(option => (
          <View
            key={option.key}
            className={classnames(
              styles.optionWrap,
              value === option.key ? styles.active : ""
            )}
            onClick={() => handleClick(option.key)}
          >
            {option.name}
          </View>
        ))}
      </View>
    </View>
  );
}

export default BaseRadio;
