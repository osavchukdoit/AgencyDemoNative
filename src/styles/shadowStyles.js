import { StyleSheet } from "react-native";
import { THEME } from "./theme";

export const shadowStyles = StyleSheet.create({
  boxShadow: {
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
  },
});
