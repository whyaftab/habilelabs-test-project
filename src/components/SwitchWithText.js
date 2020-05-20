import React from "react";
import { Text, View, Switch, TouchableHighlight } from "react-native";

export const SwitchWithText = ({ onChange, value, text }) => (
  <TouchableHighlight
    onPress={onChange}
    style={{ flex: 0.1 }}
    underlayColor="rgba(255,255,255,0.2)"
  >
    <View style={styles.container}>
      <Switch value={value} onValueChange={onChange} />
      <Text>{text}</Text>
    </View>
  </TouchableHighlight>
);

const styles = {
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
};
