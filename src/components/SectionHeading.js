import React from "react";
import { Text } from "react-native";

export const SectionHeading = ({ text }) => (
  <Text style={styles.textStyle}>{text}</Text>
);

const styles = {
  textStyle: { fontWeight: "bold" },
};
