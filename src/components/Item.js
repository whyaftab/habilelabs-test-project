import React from "react";
import { Text, View } from "react-native";

export const Item = ({ property, value, heading, redProperty }) => (
  <View style={[styles.container]}>
    <Text
      style={[
        styles.textStyle,
        heading && styles.headingStyle,
        redProperty && styles.redPropertyStyle,
      ]}
    >
      {property}
    </Text>
    <Text style={[styles.textStyle, heading && styles.headingStyle]}>
      {value}
    </Text>
  </View>
);

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {},
  headingStyle: {
    fontWeight: "bold",
  },
  redPropertyStyle: {
    color: "red",
  },
};
