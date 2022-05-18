import { isEmpty } from "lodash";
import { StyleSheet } from "react-native";
import { CONSTANTS } from "../constants";

/**
 * Applies inline string descriptor styles to field styles.
 *
 * @param {string} markup descriptor styles
 * @returns {null|*}
 */
export const propMarkupStyles = (markup) => {
  if (isEmpty(markup)) {
    return null;
  }
  const markupStyles = markup.split(",");
  return markupStyles.map((style) => {
    switch (style) {
      case "bold":
        return propStyles.bold;
      case "increaseFont20":
        return propStyles.increaseFont20;
    }
  });
};

const propStyles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  increaseFont20: {
    fontSize: CONSTANTS.STYLES.BASE_FONT_SIZE * 1.2,
  },
});
