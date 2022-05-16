import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import { THEME } from "../../styles/theme";

export const AppTooltip = ({ tooltipText }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Tooltip
      isVisible={isTooltipVisible}
      content={<Text>{tooltipText}</Text>}
      placement={"top"}
      onClose={() => setTooltipVisible(false)}
    >
      <TouchableOpacity
        onPress={() => setTooltipVisible(true)}
        style={{ paddingHorizontal: 4 }}
      >
        <Text style={styles.text}>[?]</Text>
      </TouchableOpacity>
    </Tooltip>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 16,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});
