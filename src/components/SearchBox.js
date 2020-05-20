import React from "react";
import { TextInput } from "react-native";

export const SearchBox = ({
  onChangeText,
  value,
  placeholder = "Search...",
}) => (
  <TextInput
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    style={styles.inputStyle}
  />
);

const styles = {
  inputStyle: {
    height: 40,
    borderWidth: 1,
    color: "#333",
    borderRadius: 40,
    padding: 10,
    borderColor: "#efefef",
  },
};
